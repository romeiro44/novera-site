/* Configure the official WhatsApp number before launch (country code + area code + number, digits only). */
const NOVERA_WHATSAPP_NUMBER = "5516994119235";
const WHATSAPP_BASE_URL = `https://wa.me/${NOVERA_WHATSAPP_NUMBER}`;
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

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

function trackConversion(eventName, detail = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...detail });
  window.dispatchEvent(new CustomEvent("noveraconversion", { detail: { event: eventName, ...detail } }));
}

document.querySelectorAll("[data-wa]").forEach((link) => {
  link.href = WHATSAPP_BASE_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.addEventListener("click", () => {
  trackConversion("whatsapp_cta_click", { placement: link.closest("section")?.id || "navigation" });
  const message = "Olá! Gostaria de conversar sobre energia solar com a NOVERA.";
  link.href = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
  });
});

const phone = document.querySelector("#phone");
phone.addEventListener("input", () => {
  const digits = phone.value.replace(/\D/g, "").slice(0, 11);
  if (!digits) { phone.value = ""; return; }
  if (digits.length <= 2) phone.value = `(${digits}`;
  else if (digits.length <= 6) phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  else if (digits.length <= 10) phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  else phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
});

document.querySelector("#lead-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const phoneDigits = String(fields.get("phone")).replace(/\D/g, "");
  const lead = {
    name: fields.get("name").trim(),
    phone: fields.get("phone").trim(),
    city: fields.get("city").trim(),
    bill: fields.get("bill") || "Não informado",
    property: fields.get("property")
  };
  const message = `Olá! Meu nome é ${lead.name}. Quero saber sobre energia solar.\n\nWhatsApp: ${lead.phone}\nCidade: ${lead.city}\nMédia da conta: ${lead.bill}\nTipo de imóvel: ${lead.property}`;
  if (phoneDigits.length < 10) {
    document.querySelector("#phone").setCustomValidity("Informe um telefone com DDD.");
    document.querySelector("#phone").reportValidity();
    document.querySelector("#phone").setCustomValidity("");
    return;
  }
  // Send only a generic conversion event to analytics; form answers stay in the user-initiated WhatsApp message.
  trackConversion("lead_form_submit");
  window.open(`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  document.querySelector("#form-feedback").textContent = "Mensagem preparada. Confira os dados e toque em enviar no WhatsApp.";
});

document.querySelector("#year").textContent = new Date().getFullYear();
