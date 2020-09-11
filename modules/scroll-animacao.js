export default function initAnime() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

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
