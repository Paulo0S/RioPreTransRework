const legacyLines = [
  ["103", "Duas Vendas"],
  ["107", "São Deocleciano"],
  ["108", "Jaguare"],
  ["110", "Distrito Carlos Arnaldo"],
  ["113", "Talhado"],
  ["116", "São Felício"],
  ["118", "Luz da Esperança via Pq. da Liberdade"],
  ["121", "Lealdade, Amizade"],
  ["200", "Jardim Maria Lúcia"],
  ["203", "Jardim Santo Antônio"],
  ["205", "Itapema, Dom Lafaiete"],
  ["208", "São Jorge via Res. América"],
  ["210", "Eldorado"],
  ["214", "Av. Mirassolândia"],
  ["216", "Solo Sagrado via Floresta Parque"],
  ["217", "Solo Sagrado via Mirassolândia"],
  ["219", "Parque Dignidade"],
  ["220", "Vida Nova Rio Preto"],
  ["301", "Débora Cristina"],
  ["303", "Jardim Urano"],
  ["304", "Higienópolis"],
  ["305", "Av. José Munia"],
  ["307", "Jardim Tarraf"],
  ["308", "Jardim Maracanã"],
  ["309", "Shopping Rio Preto"],
  ["310", "Shopping Iguatemi"],
  ["315", "Shopping Plaza"],
  ["401", "Cidade Jardim"],
  ["406", "Brejo Alegre"],
  ["407A", "Vila Toninho, Egas Moniz"],
  ["409", "Nova Veneza"],
  ["413", "Santa Catarina, Pq. Vila Nobre"],
  ["416", "Vida Nova Fraternidade"],
  ["701", "Região Norte, Distrito Industrial"],
  ["703", "Interbairros, Zona Norte / Sul"],
  ["40", "Noturna Santo Antônio"],
  ["41", "Noturna Solo Sagrado"],
  ["42", "Noturna Jaguare"],
  ["43", "Noturna Cristo Rei"],
  ["801", "Bela Vista"],
  ["211", "Boa Vista"],
  ["111.2", "Cavalari via Santa Clara"],
  ["4051", "Damhas"],
  ["215", "Distrito Industrial Ulisses Guimarães"],
  ["407A2", "Éden Leste, Santa Catarina, Vila Nobre"],
  ["410A", "Engenheiro Schmitt Represa"],
  ["410B", "Engenheiro Schmitt Waldemar de Oliveira Verdi"],
  ["94", "Extra Alarme"],
  ["88", "Extra As Valquírias"],
  ["70", "Extra Famerp"],
  ["311", "Extra IURD"],
  ["63", "Extra Navarrete, Santa Maria, São Pedro"],
  ["69", "Extra Navarrete, São Pedro, São Francisco"],
  ["85", "Extra Philadelpho"],
  ["61", "Extra Sesi"],
  ["611", "Extra Sesi Represa"],
  ["62", "Extra Unesp"],
  ["92", "Extra Unilago"],
  ["59", "Extra Unip"],
  ["64", "Extra Vila Azul, São Francisco"],
  ["106.1", "Jardim do Lago via Castelinho"],
  ["106.2", "Jardim do Lago via Castelinho 2"],
  ["4041", "Jardim Soraia, Romano Calil"],
  ["405", "Jardim Yolanda, Rios d'Itália"],
  ["112", "Jardim Primavera"],
  ["114", "Jardim Sônia, Rio Reno"],
  ["206", "Jardim Nunes"],
  ["412", "Mancor Daud"],
  ["202", "Nato Vetorazzo"],
  ["312", "Navarrete, Santa Maria"],
  ["218", "Parque Nova Esperança, Shopping Norte"],
  ["204", "Parque Cidadania"],
  ["702", "Parque Nova Esperança, Distrito Industrial I"],
  ["212", "Parque do Sol, Residencial Palestra"],
  ["1161", "São Felício, Terminal"],
  ["306", "São Francisco"],
  ["208", "São Jorge via Residencial América"],
  ["123", "SetValley, Mais Parque"],
  ["3091", "Shopping, José Munia"],
  ["122", "Solidariedade, Residencial Rio Preto I"],
  ["3021", "Santa Maria, Navarrete, Vista Alegre"],
  ["115", "Vila Elmaz, Santa Ana"],
  ["1041", "Vila Ideal A/B"],
  ["407B", "Vila Toninho, Beneficência"],
  ["4052", "Yolanda, Damhas"],
];
const lines = window.riopretransLines?.length
  ? window.riopretransLines
  : legacyLines;
const officialMap = "https://linhasriopreto.riopretrans.com.br/mapa/";
const lower = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR");

function localLineUrl(number) {
  const route = lines.find(
    ([lineNumber]) =>
      lineNumber.toLocaleLowerCase("pt-BR") ===
      String(number).toLocaleLowerCase("pt-BR"),
  );
  return route
    ? `horarios.html?linha=${encodeURIComponent(route[0])}`
    : "horarios.html";
}

function goToLines(query = "") {
  const term = lower(query.trim());
  const exactRoute = lines.find(
    ([number, name]) =>
      lower(number) === term ||
      lower(name) === term ||
      lower(`${number} ${name}`) === term,
  );
  if (exactRoute) {
    window.location.href = localLineUrl(exactRoute[0]);
    return;
  }
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  window.location.href = `linhas.html${params.size ? `?${params}` : ""}`;
}

const routeInput = document.querySelector("#route-input");
const results = document.querySelector("#search-results");
const searchForm = document.querySelector("#route-search");
function renderResults(query) {
  if (!results) return;
  const term = lower(query.trim());
  const matches = term
    ? lines
        .filter(([number, name]) => lower(`${number} ${name}`).includes(term))
        .slice(0, 7)
    : [];
  results.replaceChildren();
  if (!term) {
    results.classList.remove("open");
    return;
  }
  if (!matches.length) {
    const empty = document.createElement("div");
    empty.className = "result-option";
    empty.innerHTML =
      '<span class="result-num">?</span><span>Nenhuma linha encontrada. Tente outro destino.</span>';
    results.append(empty);
  } else {
    matches.forEach(([number, name]) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "result-option";
      option.setAttribute("role", "option");
      option.innerHTML = `<span class="result-num">${number}</span><span>${name}</span><span class="result-arrow">→</span>`;
      option.addEventListener("click", () => {
        window.location.href = localLineUrl(number);
      });
      results.append(option);
    });
  }
  results.classList.add("open");
}
if (routeInput && results && searchForm) {
  routeInput.addEventListener("input", () => renderResults(routeInput.value));
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    goToLines(routeInput.value.trim());
  });
  document.querySelectorAll(".search-shortcuts button").forEach((button) =>
    button.addEventListener("click", () => {
      routeInput.value = button.dataset.query;
      renderResults(routeInput.value);
      routeInput.focus();
    }),
  );
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".route-search"))
      results.classList.remove("open");
  });
}

const lineGrid = document.querySelector("#line-grid");
const lineSearch = document.querySelector("#line-search");
const lineCount = document.querySelector("#line-count");
function drawLines(query = "") {
  if (!lineGrid) return;
  const term = lower(query.trim());
  const filtered = lines.filter(([number, name]) =>
    lower(`${number} ${name}`).includes(term),
  );
  lineGrid.innerHTML = filtered
    .map(
      ([number, name]) =>
        `<article class="line-card"><div class="line-card-top"><span class="result-num">${number}</span><span class="line-type">${number.startsWith("4") ? "BAIRRO" : number.startsWith("7") ? "INTERBAIRROS" : "URBANA"}</span></div><h3>${name}</h3><p>Consulte os horários, plataforma e itinerário da linha.</p><a href="${localLineUrl(number)}">Ver horários e itinerário <span>→</span></a></article>`,
    )
    .join("");
  if (lineCount)
    lineCount.textContent = `${filtered.length} ${filtered.length === 1 ? "linha encontrada" : "linhas encontradas"}`;
  const empty = document.querySelector("#line-empty");
  if (empty) empty.hidden = filtered.length > 0;
}

const routeDetail = document.querySelector("#route-detail");
function renderRouteDetail(route) {
  if (!routeDetail) return;

  if (!route) {
    routeDetail.innerHTML =
      '<p class="route-empty">Selecione uma linha para consultar horários e itinerário.</p>';
    return;
  }

  const schedule = window.riopretransSchedules?.find(
    (item) => item.number === route[0],
  );
  const periods = schedule?.periods || [];
  const periodCards = periods
    .map(
      ({ label, times }) => `
    <section class="schedule-period">
      <h3>${label}</h3>
      <div class="schedule-times">${times.map((time) => `<span>${time}</span>`).join("")}</div>
    </section>
  `,
    )
    .join("");
  const itinerary = schedule?.path
    ? `<section class="route-itinerary"><h3>Itinerário</h3><p>${schedule.path}</p></section>`
    : "";

  routeDetail.innerHTML = `
    <div class="route-detail-heading">
      <span class="result-num">${route[0]}</span>
      <div><span class="eyebrow"><span></span> HORÁRIOS OFICIAIS</span><h2>${route[1]}</h2></div>
    </div>
    <div class="route-summary">
      <div><span>Plataforma</span><strong>${schedule?.platform || "Consulte no terminal"}</strong></div>
      <div><span>Tempo médio</span><strong>${schedule?.duration || "Consulte o itinerário"}</strong></div>
    </div>
    ${periods.length ? periodCards : '<p class="route-unavailable">O portal oficial não disponibilizou horários estruturados para esta linha. Consulte o atendimento para confirmar as partidas.</p>'}
    ${itinerary}
    <p class="route-data-note">Dados do portal RioPretrans capturados em 15/10/2026. Os horários podem sofrer alterações.</p>
  `;
}

if (routeDetail) {
  const selectedNumber =
    new URLSearchParams(location.search).get("linha") || "";
  const selectedRoute = lines.find(
    ([number]) =>
      number.toLocaleLowerCase("pt-BR") ===
      selectedNumber.toLocaleLowerCase("pt-BR"),
  );
  renderRouteDetail(selectedRoute);
}
if (lineGrid) {
  drawLines(
    new URLSearchParams(location.search).get("q") ||
      new URLSearchParams(location.search).get("linha") ||
      "",
  );
  if (lineSearch) {
    lineSearch.value =
      new URLSearchParams(location.search).get("q") ||
      new URLSearchParams(location.search).get("linha") ||
      "";
    lineSearch.addEventListener("input", () => drawLines(lineSearch.value));
  }
}

const officialLineSelect = document.querySelector("#official-line-select");
if (officialLineSelect) {
  officialLineSelect.replaceChildren(new Option("Selecione uma linha", ""));
  lines.forEach(([number, name]) =>
    officialLineSelect.add(new Option(`LINHA ${number}: ${name}`, number)),
  );
  const selectedNumber =
    new URLSearchParams(location.search).get("linha") || "";
  officialLineSelect.value = selectedNumber;
  officialLineSelect.addEventListener("change", () => {
    if (officialLineSelect.value)
      window.location.href = `horarios.html?linha=${encodeURIComponent(officialLineSelect.value)}`;
    else window.location.href = "horarios.html";
  });
}

const integrationSearch = document.querySelector("#integration-search");
const integrationBody = document.querySelector("#integration-body");
if (integrationBody && Array.isArray(window.riopretransIntegration)) {
  const rows = document.createDocumentFragment();
  window.riopretransIntegration.forEach(
    ([number, name, minutes, exclusions]) => {
      const row = document.createElement("tr");
      row.dataset.integrationRow = "";
      [number, name, `${minutes} min`, exclusions].forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      });
      rows.append(row);
    },
  );
  integrationBody.replaceChildren(rows);
}
if (integrationSearch)
  integrationSearch.addEventListener("input", () => {
    const query = lower(integrationSearch.value.trim());
    document.querySelectorAll("[data-integration-row]").forEach((row) => {
      row.hidden = !lower(row.textContent).includes(query);
    });
  });

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu",
    );
  });
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      nav.querySelectorAll(".nav-dropdown").forEach(closeDropdown);
    }),
  );
}
const dropdowns = [...document.querySelectorAll(".nav-dropdown")];
const canHover = matchMedia("(hover: hover) and (pointer: fine)");
const closeDropdown = (dropdown) => {
  dropdown.open = false;
  delete dropdown.dataset.pinned;
  clearTimeout(dropdown.closeTimer);
};

dropdowns.forEach((dropdown) => {
  const summary = dropdown.querySelector("summary");

  summary?.addEventListener("click", (event) => {
    event.preventDefault();
    const shouldClose = dropdown.open && dropdown.dataset.pinned === "true";
    dropdowns.forEach((other) => {
      if (other !== dropdown) closeDropdown(other);
    });

    if (shouldClose) closeDropdown(dropdown);
    else {
      dropdown.open = true;
      dropdown.dataset.pinned = "true";
    }
  });

  dropdown.addEventListener("pointerenter", () => {
    clearTimeout(dropdown.closeTimer);
    if (!canHover.matches || dropdown.dataset.pinned === "true") return;
    dropdowns.forEach((other) => {
      if (other !== dropdown && other.dataset.pinned !== "true")
        other.open = false;
    });
    dropdown.open = true;
  });

  dropdown.addEventListener("pointerleave", () => {
    if (!canHover.matches || dropdown.dataset.pinned === "true") return;
    dropdown.closeTimer = setTimeout(() => {
      if (!dropdown.matches(":hover")) dropdown.open = false;
    }, 140);
  });
});
document.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    if (!dropdown.contains(event.target)) closeDropdown(dropdown);
  });
  if (
    nav?.classList.contains("open") &&
    !nav.contains(event.target) &&
    !menuToggle?.contains(event.target)
  ) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") dropdowns.forEach(closeDropdown);
});

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  let theme = "light";
  try {
    theme = localStorage.getItem("riopretrans-theme") || "light";
  } catch {}
  const applyTheme = (value) => {
    const isDark = value === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.content = isDark ? "#171a20" : "#ffffff";
    themeToggle.innerHTML = `<span aria-hidden="true">${isDark ? "☀" : "☾"}</span>`;
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Ativar modo claro" : "Ativar modo escuro",
    );
    themeToggle.title = isDark ? "Ativar modo claro" : "Ativar modo escuro";
  };
  applyTheme(theme);
  themeToggle.addEventListener("click", () => {
    theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("riopretrans-theme", theme);
    } catch {}
    applyTheme(theme);
  });
}

const cookieBanner = document.querySelector("#cookie-banner");
if (cookieBanner) {
  try {
    if (localStorage.getItem("riopretrans-cookie-ok") === "yes")
      cookieBanner.classList.add("hidden");
  } catch {}
  document.querySelector("#cookie-accept")?.addEventListener("click", () => {
    try {
      localStorage.setItem("riopretrans-cookie-ok", "yes");
    } catch {}
    cookieBanner.classList.add("hidden");
  });
}
