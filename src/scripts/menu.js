const menu = document.querySelector(".navigation");
const icon = document.querySelector(".menu-button");
const body = document.body;

// ABRIR MENU
function openMenu() {
  menu.style.display = "flex";
  icon.style.display = "none";
  if (window.innerWidth <= 1024) {
    body.classList.add("no-scroll");
  }
}

// FECHAR O MENU
function closeMenu() {
  menu.style.display = "none";
  icon.style.display = "block";
  body.classList.remove("no-scroll");
}

//VERIFICA A LARGURA DA TELA E AJUSTA A VISIBILIDADE DO MENU
function checkMenuVisibility() {
  if (window.innerWidth > 1024) {
    menu.style.display = "flex"; // Exibe o menu em telas grandes
    icon.style.display = "none"; // Esconde os ícones de menu
    body.classList.remove("no-scroll"); // Reativa o scroll no desktop
  } else {
    menu.style.display = "none"; // Esconde o menu em telas pequenas
    icon.style.display = "block"; // Mostra o ícone de abrir menu
    body.classList.remove("no-scroll"); // Remove no-scroll no mobile fechado
  }
}

// Adiciona o listener para o resize
window.addEventListener("resize", checkMenuVisibility);

// Seleciona todos os links do menu mobile
let mobileLinks = menu.querySelectorAll("a");

// Adiciona evento de clique a cada link mobile
mobileLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (window.innerWidth <= 1024) {
      closeMenu(); // Fecha o menu e reativa o scroll apenas em mobile
    }
  });
});

// MENU DESKTOP
window.onscroll = function () {
  let header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

//ROLAR CORRETAMENTE PARA  SEÇÃO
function scrollToSection(event) {
  const targetId = event.target.getAttribute("href");

  if (targetId.startsWith("#")) {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    const headerOffset = document.querySelector(".header").offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Seleciona todos os links do menu
let allLinks = document.querySelectorAll(".header a");

// Adiciona evento de clique a cada link
allLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

// Verifica a visibilidade do menu ao carregar a página
checkMenuVisibility();
