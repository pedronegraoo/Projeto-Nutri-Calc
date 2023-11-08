// MENU LATERAL
const itemMenu = document.querySelectorAll(".item-menu");

itemMenu.forEach((item) => {
  item.addEventListener("click", () => {
    const itemSelecionado = document.querySelector(".item-menu.selecionado");

    if (itemSelecionado) {
      itemSelecionado.classList.remove("selecionado");
    }

    item.classList.add("selecionado");
  });
});

// expandir menu lateral
const btnExpandir = document.getElementById("btn-expansao");
const menu = document.querySelector(".menu-lateral");
const redes = document.querySelector(".div-redes-sociais");

btnExpandir.addEventListener("click", () => {
  menu.classList.toggle("expandir");
  redes.classList.toggle("mostrar");
});

// exibir dropdown
const dropdown = document.getElementById("drop");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("exibir");
});
