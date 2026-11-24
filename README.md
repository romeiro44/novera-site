# NOVERA — site institucional

Landing page estática responsiva, em português, preparada para GitHub Pages. Não precisa instalar ferramentas nem compilar arquivos.

## Arquivos

- `index.html`: conteúdo, metadados de busca e estrutura acessível.
- `styles.css`: identidade visual responsiva e ilustrações vetoriais.
- `script.js`: menu móvel, formulário que prepara conversa no WhatsApp, eventos de conversão.
- `assets/favicon.svg`: símbolo da marca para a aba do navegador.

## Antes de publicar

1. O contato informado está configurado no site como Caique Falquetti, WhatsApp **(16) 99411-9235**. Se o número mudar, atualize `NOVERA_WHATSAPP_NUMBER` em `script.js`.
2. Revise a área atendida, política de privacidade e informações de contato para refletir a operação real. A página não guarda os dados; o usuário escolhe abrir o WhatsApp com a mensagem preenchida.
3. Verifique disponibilidade do nome NOVERA no INPI (incluindo classes ligadas a energia e instalação), em domínios e em redes sociais. A checagem é necessária antes do lançamento público.
4. Para métricas, o site publica eventos genéricos `whatsapp_cta_click` e `lead_form_submit` em `window.dataLayer` e também dispara o evento do navegador `noveraconversion`. As respostas do formulário não são anexadas a esses eventos; só aparecem na mensagem que a pessoa escolhe abrir no WhatsApp. Você pode integrar seu gerenciador de tags/analytics e consentimento conforme sua política. Nenhum identificador de analytics é incluído por padrão.

## Publicar no GitHub Pages — passo a passo

1. Entre em [github.com](https://github.com/) e crie um repositório novo, por exemplo `noverabr`.
2. Na página do repositório, use **Add file → Upload files**. Arraste `index.html`, `styles.css`, `script.js`, `README.md` e a pasta `assets` preservando essa estrutura. Confirme em **Commit changes**.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/(root)`. Clique em **Save**.
6. Aguarde o GitHub Pages concluir a publicação. A URL aparecerá na própria tela de Pages, geralmente no formato `https://SEU-USUARIO.github.io/noverabr/`.
7. Abra a URL no celular e no computador. Confirme o formulário, links e o número oficial do WhatsApp.

Para atualizar, envie os arquivos alterados novamente ao repositório. O GitHub Pages republica após o commit.

## Identidade visual inicial

- **NOVERA** em Manrope ExtraBold, caixa alta, com espaçamento amplo.
- Slogan: “Energia inteligente. Futuro eficiente.”
- Símbolo geométrico original: três linhas de energia se cruzam dentro de um contorno hexagonal, formando um N abstrato. Os SVGs podem ser usados em fundo claro ou escuro.
- Paleta: verde floresta `#173B31`, verde profundo `#102C25`, areia `#F5F3EB`, névoa `#DCE3D5`, lima solar `#C6DF72`.
- Tipografia: Manrope para títulos e DM Sans para textos de interface.

## Pendências de marca e conteúdo

O site antigo em `https://cfscfscfscfs.github.io/sunlar-rp/` não pôde ser acessado na preparação: o host não foi encontrado. Portanto, nenhum dado do site anterior foi reaproveitado. Número de WhatsApp, domínio, registros, credenciais, equipe, fornecedores, garantias, depoimentos e resultados reais precisam ser confirmados pela empresa antes de aparecerem publicamente. A ilustração da capa é vetorial e conceitual, não representa uma instalação NOVERA.
