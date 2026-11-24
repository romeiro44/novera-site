# NOVERA — site institucional

Landing page estática responsiva, em português, preparada para GitHub Pages. Não precisa instalar ferramentas nem compilar arquivos.

## Arquivos

- `index.html`: conteúdo, metadados de busca e estrutura acessível.
- `styles.css`: identidade visual responsiva e ilustrações vetoriais.
- `script.js`: menu móvel, formulário que prepara conversa no WhatsApp, eventos de conversão.
- `marketing-config.js`: campos vazios para futuras IDs de marketing; nenhum rastreador carrega por padrão.
- `conteudos/index.html`: listagem editorial preparada, sem artigos fictícios.
- `conteudos/modelo.html`: modelo de artigo interno com `noindex` até ser revisado e preenchido.
- `projetos/modelo.html`: ficha interna para cadastrar casos reais autorizados, também com `noindex`.
- `assets/favicon.svg`: símbolo da marca para a aba do navegador.
- `robots.txt` e `sitemap.xml`: orientação de rastreamento e endereço público da página.

A página inicial agora tem caminhos residenciais e empresariais, simulador qualitativo, formulário que abre uma mensagem preparada no WhatsApp e uma área de portfólio em estado vazio até existirem projetos reais para publicar. A simulação não calcula economia ou dimensionamento e não usa tarifa inventada.

## Antes de publicar

1. O contato informado está configurado no site como Caique Falquetti, WhatsApp **(16) 99411-9235**. Se o número mudar, atualize `NOVERA_WHATSAPP_NUMBER` em `script.js`.
2. Revise a área atendida, política de privacidade e informações de contato para refletir a operação real. A página não guarda os dados; o usuário escolhe abrir o WhatsApp com a mensagem preenchida.
3. Verifique disponibilidade do nome NOVERA no INPI (incluindo classes ligadas a energia e instalação), em domínios e em redes sociais. A checagem é necessária antes do lançamento público.
4. Os eventos `whatsapp_cta_click`, `lead_form_submit`, `solar_simulator_complete` e `solar_simulator_cta_click` só são emitidos depois de consentimento para métricas. Os dados pessoais preenchidos não são incluídos nos eventos. IDs devem ser fornecidos e a política de privacidade revisada antes de ligar GA4, GTM, Ads ou Meta Pixel.

## Publicação no GitHub Pages

O site está configurado para o repositório `romeiro44/novera-site` e usa como URL canônica `https://romeiro44.github.io/novera-site/`. A publicação ainda precisa ser feita pelo responsável autorizado.

Para publicar quando estiver autorizado:

1. Abra o repositório [romeiro44/novera-site](https://github.com/romeiro44/novera-site) e envie os arquivos do site para a raiz da branch `main`, preservando a pasta `assets`.
2. Em **Settings → Pages**, confira **Deploy from a branch**, branch `main` e pasta `/(root)`.
3. Aguarde a conclusão da implantação e abra a URL exibida nas configurações do Pages.
4. Confira o site em celular e computador, formulário e WhatsApp.

## Google Search Console

Depois de publicar, adicione a propriedade de prefixo de URL `https://romeiro44.github.io/novera-site/` no [Google Search Console](https://search.google.com/search-console/), conclua a verificação solicitada pelo Google e envie `https://romeiro44.github.io/novera-site/sitemap.xml`. A ferramenta pode ser usada para inspecionar a URL e acompanhar o rastreamento; o envio do sitemap não garante indexação. Não há confirmação de indexação neste projeto.

## SEO local e fatos da empresa

O conteúdo informa apenas Ribeirão Preto e região, sem listar municípios ainda não confirmados. Não foi incluído endereço nem marcação `LocalBusiness`, avaliações, credenciais ou promessas. Confirme cidades atendidas, endereço comercial (se houver e se for apropriado publicar), escopo de instalação e dados legais antes de acrescentar informações locais. O nome e o domínio também precisam de consulta de disponibilidade antes do lançamento.

Para atualizar, envie os arquivos alterados novamente ao repositório. O GitHub Pages republica após o commit.

## Identidade visual inicial

- **NOVERA** em Manrope ExtraBold, caixa alta, com espaçamento amplo.
- Slogan: “Energia inteligente. Futuro eficiente.”
- Símbolo geométrico original: três linhas de energia se cruzam dentro de um contorno hexagonal, formando um N abstrato. Os SVGs podem ser usados em fundo claro ou escuro.
- Paleta: verde floresta `#173B31`, verde profundo `#102C25`, areia `#F5F3EB`, névoa `#DCE3D5`, lima solar `#C6DF72`.
- Tipografia: Manrope para títulos e DM Sans para textos de interface.

## Pendências de marca e conteúdo

O site antigo em `https://cfscfscfscfs.github.io/sunlar-rp/` não pôde ser acessado na preparação: o host não foi encontrado. Portanto, nenhum dado do site anterior foi reaproveitado. Número de WhatsApp, domínio, registros, credenciais, equipe, fornecedores, garantias, depoimentos e resultados reais precisam ser confirmados pela empresa antes de aparecerem publicamente. A ilustração da capa é vetorial e conceitual, não representa uma instalação NOVERA.
