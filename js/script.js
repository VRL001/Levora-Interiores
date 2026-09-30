/* =====================================================================
   SCRIPT — cada seção do site tem sua própria função.
   Os textos, valores e contatos ficam em data.js (objeto C).
   ===================================================================== */

/* ===== AUXILIARES ===== */
const $ = id => document.getElementById(id);
const wa = t => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(t || C.msg)}`;
const ph = (src, label) => `<div class="ph ${src ? 'has' : ''}" ${src ? `style="background-image:url('${src}')"` : ''}><span>${label}</span></div>`;
const GOOGLE_G = `<svg class="gi" viewBox="0 0 48 48" aria-label="Google"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.7 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z"/><path fill="#FBBC05" d="M10.5 28.7A14.500 14.500 0 0 1 9.500 24c0-1.600.3-3.200.8-4.700l-7.900-6.100A24 24 0 0 0 0 24c0 3.900.9 7.500 2.600 10.800l7.900-6.100z"/><path fill="#34A853" d="M24 48c6.500 0 11.900-2.100 15.900-5.800l-7.600-5.900c-2.100 1.400-4.800 2.300-8.300 2.300-6.300 0-11.600-4.200-13.500-9.900l-7.900 6.100C6.500 42.600 14.600 48 24 48z"/></svg>`;

/* ===== LINKS DE WHATSAPP / GOOGLE (botões espalhados pela página) ===== */
function initLinks() {
  ["waC", "waF"].forEach(i => $(i).href = wa());
  $("gl").href = C.google;
  $("yr").textContent = new Date().getFullYear();
}

/* ===== HERO (foto em destaque) ===== */
function initHero() {
  if (C.destaque.img) { $("heroImg").style.backgroundImage = `url('${C.destaque.img}')`; $("heroImg").classList.add("has"); }
}

/* ===== MODAL DE GALERIA (usado por Projetos e por "Ver detalhes" dos valores) ===== */
function abrirGaleria({ nome, meta, desc, capa, galeria, extra = "" }) {
  const g = galeria && galeria.length ? galeria : [capa, "", "", ""];
  $("dlB").innerHTML = `<div class="mg">${g.map((s, i) => ph(s, i ? 'Foto ' + (i + 1) : 'Foto principal')).join("")}</div><div class="mb"><h3>${nome}</h3><p class="mut">${meta}</p><p>${desc}</p>${extra}<a class="btn fill" target="_blank" rel="noopener" href="${wa('Olá! Gostei do projeto "' + nome + '" e gostaria de um orçamento.')}">Solicitar orçamento</a></div>`;
  $("dl").showModal();
}

/* ===== PROJETOS ===== */
function initProjetos() {
  $("pj").innerHTML = C.projetos.map((p, i) => `<article class="card"><div class="imgw">${ph(p.img, 'Foto do projeto')}</div><div class="bd"><h3>${p.nome}</h3><div class="meta">${p.tipo} · ${p.metragem}</div><div class="meta">${p.local}</div><p class="meta" style="margin:8px 0 0">${p.desc}</p><div class="row"><button class="btn sm" data-p="${i}">Ver projeto</button><a class="btn sm fill" href="#orcamento">Solicitar orçamento</a></div></div></article>`).join("");
  document.querySelectorAll("[data-p]").forEach(b => b.onclick = () => {
    const p = C.projetos[b.dataset.p];
    abrirGaleria({ nome: p.nome, meta: `${p.tipo} · ${p.metragem} · ${p.local}`, desc: p.desc, capa: p.img, galeria: p.galeria });
  });
  $("dl").addEventListener("click", e => { if (e.target === $("dl")) $("dl").close(); });
}

/* ===== VALORES (Quanto custa?) e APARTAMENTOS NOVOS — mesmo modelo de card ===== */
const priceCard = k => (v, i) => `<article class="card"><div class="bd"><h3>${v.nome}</h3><div class="meta">${v.sub}</div><div class="price"><small>A partir de</small>${v.preco}</div><div class="meta">Prazo estimado: <b style="font-weight:500">${v.prazo}</b></div><div class="row"><button class="btn sm" data-d="${k}:${i}">Ver detalhes</button><a class="btn sm fill" href="#orcamento">Solicitar orçamento</a></div></div></article>`;
function initValores() { $("vl").innerHTML = C.valores.map(priceCard("valores")).join(""); }
function initNovos() { $("nv").innerHTML = C.novos.map(priceCard("novos")).join(""); }

/* ===== "VER DETALHES" dos cards de valores → abre a galeria ===== */
function initDetalhes() {
  document.querySelectorAll("[data-d]").forEach(b => b.onclick = () => {
    const [k, i] = b.dataset.d.split(":");
    const v = C[k][i];
    abrirGaleria({ nome: v.nome, meta: `${v.sub} · A partir de ${v.preco} · Prazo estimado: ${v.prazo}`, desc: v.desc, capa: v.img, galeria: v.galeria,
      extra: `<p class="mut" style="font-size:14px">Valores estimados; podem variar conforme a complexidade do projeto.</p>` });
  });
}

/* ===== O QUE ESTÁ INCLUSO ===== */
function initIncluso() { $("inc").innerHTML = C.incluso.map(s => `<div><i>✓</i>${s}</div>`).join(""); }

/* ===== COMO FUNCIONA ===== */
function initPassos() { $("st").innerHTML = C.passos.map(s => `<div class="st"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join(""); }

/* ===== FAQ (accordion) ===== */
function initFaq() { $("fq").innerHTML = C.faq.map(q => `<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join(""); }

/* ===== ORÇAMENTO (formulário → WhatsApp) ===== */
function initOrcamento() {
  $("f").onsubmit = e => {
    e.preventDefault();
    const d = new FormData(e.target);
    const v = k => (d.get(k) || "").toString().trim() || "—";
    // Tabela (o WhatsApp não tem tabelas; usamos bloco monoespaçado com colunas alinhadas)
    const linhas = [["Nome", v("n")], ["WhatsApp", v("w")], ["Cidade", v("c")], ["Tipo de projeto", v("t")], ["Metragem", v("m")]];
    const larg = Math.max(...linhas.map(l => l[0].length));
    const tabela = linhas.map(l => l[0].padEnd(larg) + " | " + l[1]).join("\n");
    const msg = "*Solicitação de orçamento — Levora Interiores*\n\n" + "```" + tabela + "```" + "\n\n*Mensagem:*\n" + v("g");
    window.open(wa(msg), "_blank");
  };
}

/* ===== AVALIAÇÕES (carrossel) ===== */
function initAvaliacoes() {
  const list = C.avaliacoes;
  $("rv").innerHTML = list.map(a => {
    const ini = a.nome.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
    return `<article class="rc"><div class="rh"><div class="av">${ini}</div><div><b>${a.nome}</b><small>${a.data || ""}</small></div>${GOOGLE_G}</div><div class="stars">★★★★★<i>✓</i></div><p>${a.texto}</p></article>`;
  }).join("");
  $("rvNote").textContent = C.avaliacoesNota || "";
  const t = $("rv"), step = () => t.firstElementChild.getBoundingClientRect().width + 24;
  $("rvPrev").onclick = () => t.scrollBy({ left: -step(), behavior: "smooth" });
  $("rvNext").onclick = () => t.scrollBy({ left: step(), behavior: "smooth" });
}

/* ===== SOBRE ===== */
function initSobre() {
  if (C.sobreFoto) { $("sobreImg").style.backgroundImage = `url('${C.sobreFoto}')`; $("sobreImg").classList.add("has"); }
  $("sbT").textContent = C.sobre.titulo;
  $("sbX").textContent = C.sobre.texto;
  $("sbD").innerHTML = C.sobre.difs.map(d => `<span>${d}</span>`).join("");
}

/* ===== CONTATO FINAL + RODAPÉ (ícones de Instagram, WhatsApp e e-mail) ===== */
const IC = {
  ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`
};
const icon = (href, svg, label) => `<a class="ico" href="${href}" target="_blank" rel="noopener" aria-label="${label}">${svg}</a>`;
function initContato() {
  $("ci2").innerHTML = icon(C.instagram, IC.ig, "Instagram") + icon(wa(), IC.wa, "WhatsApp") + icon("mailto:" + C.email, IC.mail, "E-mail");
  $("fs").innerHTML = `<div class="soc">${icon(C.instagram, IC.ig, "Instagram")}${icon(wa(), IC.wa, "WhatsApp")}</div><a href="${C.google}" target="_blank" rel="noopener">Avaliações no Google</a><span class="mut">${C.email}<br>${C.telefone}<br>${C.local}</span>`;
}

/* ===== MENU (hambúrguer no celular) ===== */
function initMenu() {
  const lk = $("lk"), bg = $("bg");
  bg.onclick = () => { const o = lk.classList.toggle("open"); bg.setAttribute("aria-expanded", o); bg.textContent = o ? "×" : "☰"; };
  lk.querySelectorAll("a").forEach(a => a.onclick = () => { lk.classList.remove("open"); bg.textContent = "☰"; });
}

/* ===== INICIALIZAÇÃO — comente uma linha para desligar uma seção ===== */
[initLinks, initHero, initProjetos, initValores, initIncluso, initPassos, initNovos, initDetalhes, initFaq, initOrcamento, initAvaliacoes, initSobre, initContato, initMenu].forEach(fn => fn());
