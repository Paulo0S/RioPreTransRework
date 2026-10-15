const officialRoot = "https://www.riopretrans.com.br/";
const vtLogin = "https://ww01.rptrans.com.br/fenix/login.php";
const vtRegister = "https://ww01.rptrans.com.br/fenix/empresas_operadores.php";
const studentPortal = "https://ww01.rptrans.com.br/portal_estudante/login";
const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const infoPages = {
  terminal: {
    title: "Terminal Urbano",
    eyebrow: "SISTEMA DE TRANSPORTE",
    description:
      "Localização e informações do principal ponto de embarque e integração da cidade.",
    content: `<article class="content-card"><h2>Localização</h2><p>Rua Bernardino de Campos, 2491, Centro, São José do Rio Preto.</p><a class="button button-dark" href="${mapsSearch("Terminal Urbano Rio Preto, Rua Bernardino de Campos 2491")}" target="_blank" rel="noreferrer">Ver no mapa <span>↗</span></a></article><article class="content-card" style="margin-top:14px"><h2>Integração no terminal</h2><p>O terminal é o principal ponto de embarque, desembarque e integração entre linhas urbanas. A integração dentro do terminal é feita pelas portas traseiras, sem passar novamente pelas catracas.</p><div class="page-actions"><a class="button button-outline" href="integracao.html">Ver regras de integração <span>→</span></a><a class="button button-outline" href="horarios.html">Consultar horários <span>→</span></a></div></article>`,
  },
  "cartao-cidadao": {
    title: "Cartão Cidadão",
    eyebrow: "CARTÕES RIOPRETRANS",
    description:
      "Cartão eletrônico para utilizar o transporte coletivo e fazer integração entre linhas.",
    content: `<article class="content-card"><h2>Como adquirir</h2><p>O cartão pode ser solicitado por qualquer pessoa no Terminal Urbano, mediante apresentação de documento pessoal e compra mínima de dois créditos. A primeira via é gratuita.</p><h3>Vantagens</h3><ul><li>Integração entre linhas compatíveis fora do terminal.</li><li>Mais segurança: em caso de perda, o cartão pode ser bloqueado e os créditos transferidos para outro cartão.</li><li>Recarga pelo aplicativo Linhas Rio Preto, conforme disponibilidade do serviço.</li></ul><div class="page-actions"><a class="button button-dark" href="https://linhasriopreto.riopretrans.com.br/mapa/" target="_blank" rel="noreferrer">Abrir Linhas Rio Preto <span>↗</span></a><a class="button button-outline" href="recarga.html">Encontrar ponto de recarga <span>→</span></a></div></article>`,
  },
  "cartao-vt": {
    title: "Cartão Vale Transporte",
    eyebrow: "CARTÕES RIOPRETRANS",
    description:
      "Informações do cartão e acesso ao sistema de compra de créditos para empresas e empregadores.",
    content: `<article class="content-card"><h2>Vale-transporte</h2><p>O cartão permite comprar créditos para uso no transporte coletivo. O Consórcio informa que o empregador deve cadastrar-se para emitir e administrar os créditos dos funcionários.</p><h3>Benefícios do cartão</h3><ul><li>Integração inteligente entre linhas compatíveis.</li><li>Bloqueio do cartão em caso de extravio, com transferência de créditos.</li><li>Compra online pelo sistema RioPretrans.</li></ul><div class="page-actions"><a class="button button-dark" href="${vtRegister}" target="_blank" rel="noreferrer">Cadastrar empresa ou operador <span>↗</span></a><a class="button button-outline" href="${vtLogin}" target="_blank" rel="noreferrer">Acessar sistema online <span>↗</span></a></div></article>`,
  },
  "cartao-estudante": {
    title: "Cartão Estudante",
    eyebrow: "CARTÕES RIOPRETRANS",
    description:
      "Veja os requisitos do cartão escolar e siga para o cadastro ou recadastramento.",
    content: `<article class="content-card"><h2>Cadastro e renovação</h2><p>O cadastro online é feito pelo portal do estudante ou aplicativo Linhas Rio Preto. Separe os documentos antes de iniciar; os arquivos enviados podem ter até 2 MB.</p><ul><li>Atestado de matrícula com dados do curso, frequência, carga horária e período letivo.</li><li>Controle de frequência com foto do estudante, exigido para o cartão com desconto de 50%.</li><li>Foto 3×4 recente, RG aberto, CPF e comprovante de residência recente.</li></ul><p>O prazo informado para análise é de cinco dias úteis. A taxa de emissão é R$ 25,00. O limite mensal informado é de 54 créditos estudantis.</p><div class="page-actions"><a class="button button-dark" href="${studentPortal}" target="_blank" rel="noreferrer">Cadastrar / acompanhar solicitação <span>↗</span></a><a class="button button-outline" href="https://linhasriopreto.riopretrans.com.br/mapa/" target="_blank" rel="noreferrer">Abrir aplicativo Linhas Rio Preto <span>↗</span></a><a class="button button-outline" href="formulario-frequencia.html">Formulário de frequência <span>→</span></a></div></article>`,
  },
  "cartao-idoso": {
    title: "Cartão Idoso",
    eyebrow: "CARTÕES RIOPRETRANS",
    description:
      "Informações para pessoas idosas que utilizam o transporte coletivo urbano.",
    content: `<article class="content-card"><h2>Quem tem direito</h2><p>O portal informa gratuidade para pessoas acima de 65 anos e recomenda emitir o cartão para facilitar o embarque.</p><h3>Documentos e atendimento</h3><p>Apresente RG, CPF e comprovante de endereço no Setor de Cartões do Terminal Urbano, no pilar 61. O atendimento informado pelo portal é de segunda a sexta, das 8h às 17h30.</p><p>Em caso de perda, solicite o bloqueio do cartão para evitar uso indevido.</p><a class="button button-outline" href="${mapsSearch("Setor de Cartões Terminal Urbano Rio Preto")}" target="_blank" rel="noreferrer">Ver terminal no mapa <span>↗</span></a></article>`,
  },
  "cartao-deficiente": {
    title: "Cartão Deficiente",
    eyebrow: "CARTÕES RIOPRETRANS",
    description:
      "Orientações oficiais para solicitar o cartão de pessoa com deficiência ou com acompanhante.",
    content: `<article class="content-card"><h2>Solicitação e informações</h2><p>Segundo o portal RioPretrans, os cartões são emitidos pela Secretaria Municipal dos Direitos e Políticas para Mulheres, Pessoa com Deficiência, Raça e Etnia.</p><p>Secretaria: Rua Bernardino de Campos, 4075, Redentora.</p><ul><li><a href="tel:1732222041">(17) 3222-2041</a></li><li><a href="tel:1732222588">(17) 3222-2588</a></li><li><a href="tel:1732313826">(17) 3231-3826</a></li></ul><a class="button button-outline" href="${mapsSearch("Secretaria Municipal Pessoa com Deficiência Rio Preto Rua Bernardino de Campos 4075")}" target="_blank" rel="noreferrer">Ver endereço no mapa <span>↗</span></a></article>`,
  },
  decretos: {
    title: "Decretos e documentos",
    eyebrow: "LEGISLAÇÃO DO TRANSPORTE",
    description:
      "Acesse os decretos e documentos públicos listados no portal RioPretrans.",
    content: `<article class="content-card"><h2>Documentos oficiais</h2><div class="notice-list">${[
      [
        "27/12/2023",
        "Decreto 19.646: Revisão de Tarifa",
        "DECRETO_DEZ_2023.pdf",
      ],
      [
        "30/12/2022",
        "Decreto 19.366: Revisão de Tarifa",
        "DECRETO_DEZ_2022.pdf",
      ],
      [
        "29/12/2021",
        "Decreto 19.088: Revisão de Tarifa",
        "DECRETO_DEZ_2021.pdf",
      ],
      [
        "31/12/2020",
        "Decreto 18.764: Revisão de Tarifa",
        "DECRETO_DEZ_2020.pdf",
      ],
      [
        "17/01/2020",
        "Decreto 18.514: Revisão de Tarifa",
        "DECRETO_JAN_2020.pdf",
      ],
      [
        "15/05/2019",
        "Decreto 18.321: Regulamento Estudantil",
        "Estudante_2019.pdf",
      ],
      ["05/01/2019", "Decreto 18.201: Revisão de Tarifa", "decreto_2019.pdf"],
      ["09/02/2018", "Decreto 17.973: Revisão de Tarifa", "decreto_17973.pdf"],
      [
        "13/03/2017",
        "Decreto 17.734: Revisão de Tarifa",
        "DECRETO%2017734%20REAJUSTE%20TARIFA%2003-17.pdf",
      ],
      [
        "29/12/2016",
        "Portaria SMTT 49/2016: Sistema de Bilhetagem Eletrônica",
        "PORTARIA_49.pdf",
      ],
      [
        "07/03/2016",
        "Decreto 17.489: Revisão de Tarifa",
        "DECRETO-17489%20TARIFA-2.60.pdf",
      ],
      [
        "12/02/2016",
        "Decreto 17.481: Revisão de Tarifa Técnica",
        "DECRETO%2017.481%20TARIFA%20TECNICA%2012_02_16.pdf",
      ],
      [
        "03/09/2015",
        "Decreto 17.386: Regulamento Passe Estudantil",
        "DECRETO_ESTUDANTIL_17.386%2003_09_15.pdf",
      ],
      [
        "28/08/2015",
        "Decreto 17.382: Alteração de Tarifa",
        "DECRETO_TARIFA-230.pdf",
      ],
      [
        "03/05/2015",
        "Decreto 17.315: Revisão de Tarifa Técnica",
        "decreto_17315.pdf",
      ],
      [
        "10/02/2015",
        "Decreto 17.240: Revisão de Tarifa Técnica",
        "decreto_17240.pdf",
      ],
      ["18/12/2014", "Decreto 17.220: Revisão de Tarifa", "decreto_17220.pdf"],
      [
        "13/02/2014",
        "Decreto sobre mudança de tarifa",
        "decreto_mudanca_tarifa.pdf",
      ],
      [
        "14/08/2012",
        "Decreto 16.426: Regulamento para Passe Estudantil",
        "Decreto-16426-estudante.pdf",
      ],
      ["03/11/2011", "Decreto de Nota Fiscal", "decreto_nota_fiscal.pdf"],
    ]
      .map(
        ([date, title, file]) =>
          `<div class="notice-card"><div class="notice-date">${date}</div><div><h3>${title}</h3><a class="text-link" href="https://www.riopretrans.com.br/tools/files/${file}" target="_blank" rel="noreferrer">Abrir arquivo PDF ↗</a></div></div>`,
      )
      .join("")}</div></article>`,
  },
  "quem-somos": {
    title: "Quem Somos",
    eyebrow: "EMPRESA",
    description:
      "Conheça o Consórcio RioPretrans e as empresas operadoras do transporte coletivo de Rio Preto.",
    content: `<article class="content-card"><h2>O Consórcio</h2><p>O Consórcio RioPretrans foi fundado em 9 de setembro de 2011 e é composto pelas empresas Circular Santa Luzia Ltda. e Expresso Itamarati S.A.</p><div class="table-wrap"><table class="integration-table"><thead><tr><th>EMPRESA</th><th>PARTICIPAÇÃO INFORMADA</th></tr></thead><tbody><tr><td>Circular Santa Luzia</td><td>67,8%</td></tr><tr><td>Expresso Itamarati</td><td>32,2%</td></tr></tbody></table></div><p style="margin-top:16px">A atuação do Consórcio inclui a comercialização de créditos para o transporte coletivo e a gestão da receita do sistema.</p><p>Endereço divulgado: Rua Bernardino de Campos, 2491, Terminal Urbano.</p></article>`,
  },
  "trabalhe-conosco": {
    title: "Trabalhe Conosco",
    eyebrow: "EMPRESA",
    description:
      "Informações sobre oportunidades de trabalho no Consórcio RioPretrans.",
    content: `<article class="content-card"><h2>Oportunidades</h2><p>O espaço de carreiras do portal oficial informa que as vagas disponíveis são divulgadas nesta página. Consulte o canal oficial para ver as oportunidades abertas no momento.</p><a class="button button-dark" href="${officialRoot}trabalhe_conosco" target="_blank" rel="noreferrer">Ver oportunidades oficiais <span>↗</span></a></article>`,
  },
  "venda-de-creditos": {
    title: "Venda de Créditos",
    eyebrow: "SERVIÇOS",
    description:
      "Entenda onde adquirir créditos para os cartões de transporte.",
    content: `<article class="content-card"><h2>Vale-transporte</h2><p>A recarga de vale-transporte é feita pelo sistema de recarga eletrônica. Empresas cadastram seus funcionários e realizam pedidos de créditos online.</p><div class="page-actions"><a class="button button-dark" href="${vtRegister}" target="_blank" rel="noreferrer">Cadastrar empresa ou operador <span>↗</span></a><a class="button button-outline" href="${vtLogin}" target="_blank" rel="noreferrer">Acessar sistema de créditos <span>↗</span></a></div></article><article class="content-card" style="margin-top:14px"><h2>Cartão estudante e cartão comum</h2><p>O portal informa que a recarga é feita na loja RioPretrans do Terminal Urbano. A recarga de estudante requer o controle de frequência original, com foto, assinatura e carimbo da escola.</p><a class="button button-outline" href="recarga.html">Ver pontos de recarga <span>→</span></a></article>`,
  },
  "duvidas-vt": {
    title: "Dúvidas do sistema VT",
    eyebrow: "CENTRAL DE ATENDIMENTO",
    description:
      "Orientações para cadastrar empresas, operadores e funcionários no sistema de compra de vale-transporte.",
    content: `<div class="faq-list"><details open><summary>Como cadastrar uma empresa?</summary><p>Acesse o cadastro de empresas e operadores, escolha pessoa jurídica, preencha os dados e aguarde a liberação do cadastro, que o portal informa poder levar até 48 horas.</p></details><details><summary>Posso comprar vale-transporte como pessoa física?</summary><p>Sim. O procedimento é o mesmo; no cadastro, escolha pessoa física.</p></details><details><summary>Como cadastrar funcionários?</summary><p>No sistema, abra o menu Funcionários e preencha os dados solicitados. Funcionários que ainda não têm cartão podem depender do prazo de liberação informado pelo portal.</p></details><details><summary>Como faço um pedido de créditos?</summary><p>Após o cadastro e a liberação do acesso, use o sistema online para gerenciar os cartões e pedidos.</p></details><div class="page-actions"><a class="button button-dark" href="${vtRegister}" target="_blank" rel="noreferrer">Fazer cadastro <span>↗</span></a><a class="button button-outline" href="${vtLogin}" target="_blank" rel="noreferrer">Acessar sistema online <span>↗</span></a><a class="button button-outline" href="${officialRoot}duvidas_fenix" target="_blank" rel="noreferrer">Ver FAQ oficial completo <span>↗</span></a></div></div>`,
  },
  "fale-conosco": {
    title: "Fale Conosco",
    eyebrow: "CENTRAL DE ATENDIMENTO",
    description:
      "Envie uma dúvida, sugestão ou reclamação para o canal de atendimento RioPretrans.",
    content: `<article class="content-card"><h2>Escreva para a equipe</h2><form class="contact-form" action="https://www.riopretrans.com.br/envia_fale_conosco.php" method="POST" id="official-contact-form"><div class="field-grid"><label>Nome *<input name="nome" id="nome" autocomplete="name" required/></label><label>CPF<input name="cpf" id="cpf" inputmode="numeric" autocomplete="off"/></label><label>Número do cartão<input name="cartao" id="cartao" autocomplete="off"/></label><label>E-mail *<input name="email" id="email" type="email" autocomplete="email" required/></label><label>Telefone *<input name="fone" id="fone" type="tel" autocomplete="tel" required/></label><label>Assunto *<input name="assunto" id="assunto" required/></label><label class="field-wide">Mensagem *<textarea name="msg" id="msg" rows="5" required></textarea></label></div><p class="form-note">O envio é processado pelo endpoint de atendimento do portal oficial RioPretrans.</p><button class="button button-dark" type="submit">Enviar mensagem <span>→</span></button></form></article><article class="content-card" style="margin-top:14px"><h2>Outros canais</h2><p>SAC: <a href="tel:1733538322">(17) 3353-8322</a> · Ouvidoria: <a href="tel:08007782345">0800 778-2345</a></p></article>`,
  },
};

const pageKey = new URLSearchParams(location.search).get("page") || "";
const page = infoPages[pageKey] || infoPages.terminal;
document.title = `${page.title}: RioPretrans`;
document.querySelector("#portal-breadcrumb").textContent = page.title;
document.querySelector("#portal-eyebrow").textContent = page.eyebrow;
document.querySelector("#portal-title").innerHTML = page.title.replace(
  /(Urbano|Cidadão|Transporte|Estudante|Idoso|Deficiente|documentos|créditos|Conosco)/i,
  "<em>$1</em>",
);
document.querySelector("#portal-description").textContent = page.description;
document.querySelector("#portal-content").innerHTML = page.content;
document
  .querySelector("#official-contact-form")
  ?.addEventListener("submit", (event) => {
    if (!window.confirm("Deseja enviar os dados do formulário?"))
      event.preventDefault();
  });
