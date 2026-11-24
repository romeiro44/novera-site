/* NOVERA contact and conversion settings. Tracking stays inactive without consent and configured IDs. */
const NOVERA_WHATSAPP_NUMBER = "5516994119235";
const WHATSAPP_BASE_URL = `https://wa.me/${NOVERA_WHATSAPP_NUMBER}`;
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const consentKey = "novera-marketing-consent";

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    navigation.classList.toggle("open", !isOpen);
  });
  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  }));
}

function hasMarketingConsent() {
  try { return localStorage.getItem(consentKey) === "accepted"; }
  catch { return false; }
}

function trackConversion(eventName, detail = {}) {
  if (!hasMarketingConsent()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...detail });
  window.dispatchEvent(new CustomEvent("noveraconversion", { detail: { event: eventName, ...detail } }));
}

document.querySelectorAll("[data-wa]").forEach((link) => {
  const message = "Olá! Gostaria de conversar sobre energia solar com a NOVERA.";
  link.href = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.addEventListener("click", () => trackConversion("whatsapp_cta_click", { placement: link.closest("section")?.id || "navigation" }));
});

document.querySelectorAll("[data-project]").forEach((link) => link.addEventListener("click", () => {
  const selector = document.querySelector("#project-type");
  if (selector) selector.value = link.dataset.project;
}));

const phone = document.querySelector("#phone");
if (phone) phone.addEventListener("input", () => {
  const digits = phone.value.replace(/\D/g, "").slice(0, 11);
  if (!digits) { phone.value = ""; return; }
  if (digits.length <= 2) phone.value = `(${digits}`;
  else if (digits.length <= 6) phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  else if (digits.length <= 10) phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  else phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
});

const leadForm = document.querySelector("#lead-form");
if (leadForm) leadForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const phoneDigits = String(fields.get("phone")).replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    phone.setCustomValidity("Informe um telefone com DDD.");
    phone.reportValidity();
    phone.setCustomValidity("");
    return;
  }
  const lead = {
    name: fields.get("name").trim(),
    project: fields.get("project-type"),
    city: fields.get("city").trim(),
    phone: fields.get("phone").trim(),
    bill: fields.get("bill") || "Não informado",
    property: fields.get("property") || "Não informado"
  };
  const message = `Olá! Meu nome é ${lead.name}. Tenho interesse em energia solar (${lead.project}).\n\nCidade: ${lead.city}\nWhatsApp: ${lead.phone}\nMédia da conta: ${lead.bill}\nTipo de imóvel: ${lead.property}`;
  trackConversion("lead_form_submit", { project_type: lead.project });
  window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  document.querySelector("#form-feedback").textContent = "Mensagem preparada. Confira os dados e toque em enviar no WhatsApp. Esta página não envia os dados para um servidor.";
});

const simulatorForm = document.querySelector("#simulator-form");
if (simulatorForm) simulatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const city = String(values.get("city")).trim();
  const kind = values.get("kind");
  const property = values.get("property");
  const bill = Number(values.get("bill"));
  const result = document.querySelector("#simulator-result");
  result.hidden = false;
  result.replaceChildren();
  const heading = document.createElement("b");
  heading.textContent = "Seu perfil está pronto para uma avaliação inicial.";
  const summary = document.createElement("span");
  summary.textContent = `Dados informados nesta simulação: ${city} · ${property} · ${kind} · conta média de R$ ${bill.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}. Eles não são salvos nem enviados por esta página. Para avaliar o potencial real, é necessário confirmar consumo, tarifa, regras da distribuidora e condições do imóvel.`;
  const cta = document.createElement("a");
  cta.href = "#contato";
  cta.textContent = "Quero uma avaliação personalizada ↗";
  cta.dataset.simulatorCta = "";
  result.append(heading, summary, document.createElement("br"), cta);
  trackConversion("solar_simulator_complete", { project_type: kind });
  cta.addEventListener("click", () => {
    document.querySelector("#project-type").value = kind;
    trackConversion("solar_simulator_cta_click", { project_type: kind });
  });
});

const cookieNotice = document.querySelector("#cookie-notice");
if (cookieNotice) {
  let storedChoice = null;
  try { storedChoice = localStorage.getItem(consentKey); } catch { /* No storage means no marketing consent. */ }
  if (!storedChoice) cookieNotice.hidden = false;
  document.querySelector("#consent-accept").addEventListener("click", () => {
    try { localStorage.setItem(consentKey, "accepted"); } catch { /* Consent still applies for this page view. */ }
    cookieNotice.hidden = true;
  });
  document.querySelector("#consent-reject").addEventListener("click", () => {
    try { localStorage.setItem(consentKey, "rejected"); } catch { /* Tracking remains disabled. */ }
    cookieNotice.hidden = true;
  });
  document.querySelector("#cookie-settings")?.addEventListener("click", () => { cookieNotice.hidden = false; });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
