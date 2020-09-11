export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  //verifica se existe as variaveis selecionadas no document
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo"); //for que passa pelas sections que remove a classe 'ativo' de todos os outros elementos
      });
      const animacao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", animacao); //adiciona classe ativo na section passada
    }

    //toda vez que uma imagem for clicada executa a função activeTab com o valor fornecido do index da tabMenu pelo forEach
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", function () {
        activeTab(index);
      });
    });
  }
}
