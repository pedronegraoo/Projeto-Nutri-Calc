// MENU LATERAL

// SELECIONADO
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
const overlay = document.querySelector(".overlay-menu");

btnExpandir.addEventListener("click", () => {
  menu.classList.toggle("expandir");
  redes.classList.toggle("mostrar");
  overlay.classList.toggle("active-overlay");

  itemMenu.forEach((item) => {
    item.classList.toggle("exibir-item-menu");
  });
});

// exibir dropdown
const dropdown = document.getElementById("drop");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("exibir");
});

// FECHAR MENU
itemMenu.forEach((item) => {
  if (item.id !== "drop") {
    item.addEventListener("click", () => {
      menu.classList.remove("expandir");
      redes.classList.remove("mostrar");
      overlay.classList.remove("active-overlay");

      itemMenu.forEach((item) => {
        item.classList.remove("exibir-item-menu");
      });
    });
  }
});

overlay.addEventListener("click", () => {
  menu.classList.remove("expandir");
  redes.classList.remove("mostrar");
  overlay.classList.remove("active-overlay");

  itemMenu.forEach((item) => {
    item.classList.remove("exibir-item-menu");
  });
});
