function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  //verifica se existe as variaveis selecionadas no document
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo"); //for que passa pelas sections que remove a classe 'ativo' de todos os outros elementos
      });
      tabContent[index].classList.add("ativo"); //adiciona classe ativo na section passada
    }

    //toda vez que uma imagem for clicada executa a função activeTab com o valor fornecido do index da tabMenu pelo forEach
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
function initScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function initAnime() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowParcela = window.innerHeight * 0.7;

    function animeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowParcela;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animeScroll();
    window.addEventListener("scroll", animeScroll);
  }
}

initScroll();
initTabNav();
initAccordion();
initAnime();
