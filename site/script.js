// ===== CONFIG =====
// Número de WhatsApp da Doceria Fachini (código do país 55 + DDD 19 + número).
// Vindo do menu oficial: (19) 99619-9232
const WHATSAPP_NUMERO = "5519996199232";

// ===== WHATSAPP =====
document.querySelectorAll(".js-whatsapp").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    var msg = el.getAttribute("data-msg") || "Olá! Vim pelo site da Doceria Fachini.";
    var url = "https://wa.me/" + WHATSAPP_NUMERO + "?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  });
});

// ===== MENU MOBILE =====
var toggle = document.getElementById("navToggle");
var links = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", function () {
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      links.classList.remove("open");
    });
  });
}

// ===== NAV SOMBRA AO ROLAR =====
var nav = document.getElementById("nav");
var heroEl = document.getElementById("inicio");
function navOnScroll() {
  var trigger = heroEl ? heroEl.offsetHeight - 80 : 20;
  if (window.scrollY > trigger) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
}
window.addEventListener("scroll", navOnScroll);
navOnScroll();

// ===== ANO NO RODAPÉ =====
var ano = document.getElementById("ano");
if (ano) ano.textContent = new Date().getFullYear();

// ===== APARIÇÃO SUAVE AO ROLAR =====
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  var selectors = ".section-head, .feature, .preco-card, .passo, .galeria__item, " +
    ".destaque__image, .destaque__content, .historia__card, .historia__content, " +
    ".cta-final > *";
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("reveal--in");
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(selectors).forEach(function (el) {
    el.classList.add("reveal");
    var parent = el.parentElement;
    var idx = parent ? Array.prototype.indexOf.call(parent.children, el) : 0;
    el.style.transitionDelay = Math.min(idx, 4) * 70 + "ms"; // leve escalonamento em grades
    io.observe(el);
  });
})();

// ===== LIGHTBOX DA GALERIA =====
(function () {
  var lb = document.getElementById("lightbox");
  if (!lb) return;
  var lbImg = document.getElementById("lbImg");
  var imgs = Array.prototype.slice.call(document.querySelectorAll(".galeria__item img"));
  if (!imgs.length) return;
  var current = 0;

  function show(i) {
    current = (i + imgs.length) % imgs.length;
    lbImg.setAttribute("src", imgs[current].getAttribute("src"));
    lbImg.setAttribute("alt", imgs[current].getAttribute("alt") || "");
  }
  function open(i) {
    show(i);
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  imgs.forEach(function (img, i) {
    img.addEventListener("click", function () { open(i); });
  });
  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbNext").addEventListener("click", function () { show(current + 1); });
  document.getElementById("lbPrev").addEventListener("click", function () { show(current - 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") show(current + 1);
    else if (e.key === "ArrowLeft") show(current - 1);
  });
})();
