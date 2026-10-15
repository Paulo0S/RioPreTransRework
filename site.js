const logo = `
  <span class="brand-name" aria-label="RioPreTrans">
    <span class="brand-red">RioPre</span><span class="brand-blue">Trans</span>
    <small>SÃO JOSÉ DO RIO PRETO</small>
  </span>
`;

const header = `
  <div class="announcement">
    Ouvidoria <a href="tel:08007782345"><b>0800 778-2345</b></a>
    <span class="announcement-divider">•</span>
    Atendimento <a href="tel:1733538322"><b>(17) 3353-8322</b></a>
  </div>
  <header class="site-header">
    <a class="brand" href="index.html" aria-label="RioPretrans, página inicial">${logo}</a>
    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span>
    </button>
    <nav class="main-nav" aria-label="Navegação principal">
      <details class="nav-dropdown">
        <summary>Sistema de Transporte</summary>
        <div class="dropdown-menu">
          <a href="portal-info.html?page=terminal">Terminal Urbano</a>
          <a href="portal-info.html?page=cartao-cidadao">Cartão Cidadão</a>
          <a href="portal-info.html?page=cartao-vt">Cartão Vale Transporte</a>
          <a href="portal-info.html?page=cartao-estudante">Cartão Estudante</a>
          <a href="portal-info.html?page=cartao-idoso">Cartão Idoso</a>
          <a href="portal-info.html?page=cartao-deficiente">Cartão Deficiente</a>
          <a href="portal-info.html?page=decretos">Decretos</a>
        </div>
      </details>
      <details class="nav-dropdown">
        <summary>Empresa</summary>
        <div class="dropdown-menu">
          <a href="portal-info.html?page=quem-somos">Quem Somos</a>
          <a href="frota.html">Frota</a>
          <a href="portal-info.html?page=trabalhe-conosco">Trabalhe Conosco</a>
        </div>
      </details>
      <details class="nav-dropdown">
        <summary>Serviços</summary>
        <div class="dropdown-menu">
          <a href="horarios.html">Linhas e Horários</a>
          <a href="portal-info.html?page=venda-de-creditos">Venda de Créditos</a>
          <a href="https://ww01.rptrans.com.br/fenix/login.php" target="_blank" rel="noreferrer">Sistema online ↗</a>
          <a href="estudante.html">Área do Estudante</a>
          <a href="integracao.html">Tabela de Integração</a>
          <a href="informativo.html">Informativo</a>
        </div>
      </details>
      <details class="nav-dropdown">
        <summary>Central de Atendimento</summary>
        <div class="dropdown-menu">
          <a href="ajuda.html">Dúvidas Frequentes</a>
          <a href="portal-info.html?page=duvidas-vt">Dúvidas Sistema VT</a>
          <a href="portal-info.html?page=fale-conosco">Fale Conosco</a>
        </div>
      </details>
    </nav>
    <div class="header-actions">
      <button class="theme-toggle" type="button" aria-label="Ativar modo escuro" title="Alternar tema">
        <span aria-hidden="true">☾</span>
      </button>
      <a class="header-cta" href="horarios.html">Consultar horários <span aria-hidden="true">↗</span></a>
    </div>
  </header>
`;

const footer = `
  <footer class="site-footer">
    <div class="footer-main">
      <a class="brand brand-footer" href="index.html">${logo}</a>
      <p>Conectando pessoas<br />e caminhos todos os dias.</p>
      <div class="footer-links">
        <div class="footer-link-group">
          <strong>EMPRESA</strong>
          <a href="portal-info.html?page=quem-somos">Quem Somos</a>
          <a href="frota.html">Frota</a>
          <a href="portal-info.html?page=trabalhe-conosco">Trabalhe Conosco</a>
          <a href="privacidade.html">Política de Privacidade</a>
        </div>
        <div class="footer-link-group">
          <strong>SERVIÇOS</strong>
          <a href="horarios.html">Linhas e Horários</a>
          <a href="portal-info.html?page=venda-de-creditos">Venda de Créditos</a>
          <a href="integracao.html">Tabela de Integração</a>
          <a href="estudante.html">Área do Estudante</a>
          <a href="informativo.html">Informativo</a>
          <a href="https://ww01.rptrans.com.br/div/vto.htm?1" target="_blank" rel="noreferrer">GRE ↗</a>
        </div>
        <div class="footer-link-group">
          <strong>SISTEMA DE TRANSPORTE</strong>
          <a href="portal-info.html?page=terminal">Terminal Urbano</a>
          <a href="portal-info.html?page=cartao-cidadao">Cartões</a>
          <a href="portal-info.html?page=decretos">Decretos</a>
          <a href="frota.html">Dados técnicos</a>
        </div>
        <div class="footer-link-group">
          <strong>ATENDIMENTO</strong>
          <a href="ajuda.html">Dúvidas Frequentes</a>
          <a href="portal-info.html?page=duvidas-vt">Dúvidas Sistema VT</a>
          <a href="portal-info.html?page=fale-conosco">Fale Conosco</a>
        </div>
      </div>
      <div class="footer-contact">
        <span>ATENDIMENTO</span>
        <a href="tel:1733538322">(17) 3353-8322</a>
        <small>Seg. a sex. · 8h às 18h</small>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Consórcio RioPretrans</span>
      <span>Mobilidade feita para a nossa cidade <b>✳</b></span>
    </div>
  </footer>
`;

const cookie = `
  <div class="cookie-banner" id="cookie-banner" role="dialog" aria-label="Aviso sobre cookies">
    <div class="cookie-icon">◒</div>
    <div>
      <strong>Preferências de privacidade</strong>
      <p>Utilizamos cookies para aprimorar sua experiência. Ao continuar, você concorda com nossa <a href="privacidade.html">política de privacidade</a>.</p>
    </div>
    <button id="cookie-accept">Aceitar</button>
  </div>
`;

document
  .querySelector("[data-site-header]")
  ?.insertAdjacentHTML("afterend", header);
document
  .querySelector("[data-site-footer]")
  ?.insertAdjacentHTML("beforebegin", footer);
document.body.insertAdjacentHTML("beforeend", cookie);

const currentPage = location.pathname.split("/").pop() || "index.html";
const currentRoute = `${currentPage}${location.search}`;

if (currentPage === "horarios.html") {
  document.querySelector(".header-cta")?.setAttribute("hidden", "");
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  if (
    link.getAttribute("href") === currentRoute ||
    link.getAttribute("href") === currentPage
  ) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll(".nav-dropdown").forEach((group) => {
  const containsCurrentPage = [...group.querySelectorAll("a")].some((link) =>
    [currentRoute, currentPage].includes(link.getAttribute("href")),
  );

  if (containsCurrentPage) group.classList.add("current-group");
});
