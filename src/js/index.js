// CALCULO IMC

const formImc = document.querySelector(".form-imc");
const btnSexoImc = document.querySelectorAll(".btn-sexo-imc");
const pesoIMC = document.getElementById("peso-imc");
const alturaIMC = document.getElementById("altura-imc");
const divResultTelaIMC = document.querySelector(".div-result-imc");
const resultIMC = document.querySelector(".result-imc");
const classificacaoTela = document.querySelector(".classificacao");

// esta sendo usado num teste
const inputIMC = document.querySelectorAll(".input-info-imc");

let armazenarIMC;
let classificacao;
let cont = 0;
let id = 0;

// troca pelos botões mulher/homem
btnSexoImc.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnSelecionadoM = document.querySelector(
      ".btn-sexo-imc.selecionadoM"
    );
    const btnSelecionadoH = document.querySelector(
      ".btn-sexo-imc.selecionadoH"
    );

    if (btnSelecionadoM) {
      btnSelecionadoM.classList.remove("selecionadoM");
      btn.classList.add("selecionadoH");
    } else if (btnSelecionadoH) {
      btnSelecionadoH.classList.remove("selecionadoH");
      btn.classList.add("selecionadoM");
    }
  });
});

//FORM IMC
formImc.addEventListener("submit", (ev) => {
  ev.preventDefault();

  // let teste = [];

  // inputIMC.forEach((valores) => {
  //   teste.push(valores.value);
  // });
  // console.log(teste);

  // IMC = peso ÷ (altura x altura)
  let calc = pesoIMC.value / (alturaIMC.value * alturaIMC.value);
  let IMC = calc * 10000;
  armazenarIMC = IMC.toFixed(1);

  mostrarClassificacao();
  resultadoNaTela();
  limparInputs();
  cont++;
});

function mostrarClassificacao() {
  if (armazenarIMC < 18.5) {
    return (classificacao = "Magreza");
  } else if (armazenarIMC <= 24.9) {
    return (classificacao = "Normal");
  } else if (armazenarIMC <= 29.9) {
    return (classificacao = "Sobrepeso");
  } else if (armazenarIMC <= 34.9) {
    return (classificacao = "Obesidade grau I");
  } else if (armazenarIMC <= 39.9) {
    return (classificacao = "Obesidade grau II");
  } else if (armazenarIMC >= 40) {
    return (classificacao = "Obesidade grau III");
  }
}

function resultadoNaTela() {
  if (divResultTelaIMC.style.display === "block") {
    // divResultTelaIMC.style.display = "none";
  } else {
    divResultTelaIMC.style.display = "block";
  }

  id++;

  const resultado = document.createElement("p");
  resultado.id = `id-result-${id}`;
  resultado.classList = "result-imc";
  resultado.textContent = `${armazenarIMC} kg/m2.`;

  const resultadoClassificacao = document.createElement("p");
  resultadoClassificacao.classList = "classificacao";
  resultadoClassificacao.textContent = `${classificacao}`;

  if (cont !== 0) {
    console.log(resultIMC);
    console.log(classificacaoTela);
    resultIMC.childNodes[0].remove();
    classificacaoTela.childNodes[0].remove();
  }

  resultIMC.append(resultado);
  classificacaoTela.append(resultadoClassificacao);
}

function limparInputs() {
  formImc.reset(); /*RESET metodo para limpar o formulario */
  formBasal.reset();
}

// CALCULO BASAL

const formBasal = document.querySelector(".form-basal");
const btnSexoBasal = document.querySelectorAll(".btn-sexo-basal");
const idadeBasal = document.getElementById("idade-basal");
const alturaBasal = document.getElementById("altura-basal");
const pesoBasal = document.getElementById("peso-basal");
const selectAtividade = document.getElementById("atividade-basal");
const divResultTelaBasal = document.querySelector(".div-result-basal");
const resultBasal = document.querySelector(".result-basal");
const atividadeTela = document.querySelector(".result-atividade");

let armazenarBasal;
let atividade;
let contBasal = 0;

// troca pelos botoes mulher/homem
btnSexoBasal.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnSelecionadoM = document.querySelector(
      ".btn-sexo-basal.selecionadoM"
    );
    const btnSelecionadoH = document.querySelector(
      ".btn-sexo-basal.selecionadoH"
    );

    if (btnSelecionadoM) {
      btnSelecionadoM.classList.remove("selecionadoM");
      btn.classList.add("selecionadoH");
    } else if (btnSelecionadoH) {
      btnSelecionadoH.classList.remove("selecionadoH");
      btn.classList.add("selecionadoM");
    }
  });
});

formBasal.addEventListener("submit", (ev) => {
  ev.preventDefault();

  if (divResultTelaBasal.style.display === "block") {
    // divResultTelaBasal.style.display = "none";
  } else {
    divResultTelaBasal.style.display = "block";
  }

  valorAtividade();

  const btnSelecionadoM = document.querySelector(
    ".btn-sexo-basal.selecionadoM"
  );
  const btnSelecionadoH = document.querySelector(
    ".btn-sexo-basal.selecionadoH"
  );

  if (btnSelecionadoM) {
    calculoMulher();
  } else if (btnSelecionadoH) {
    calculoHomem();
  }

  limparInputs();
  contBasal++;
});

function valorAtividade() {
  if (selectAtividade.value === "sedentario") {
    return (atividade = 1.2);
  } else if (selectAtividade.value === "levemente") {
    return (atividade = 1.375);
  } else if (selectAtividade.value === "moderadamente") {
    return (atividade = 1.55);
  } else if (selectAtividade.value === "altamente") {
    return (atividade = 1.725);
  } else if (selectAtividade.value === "extramamente") {
    return (atividade = 1.9);
  }
}

//Fórmula para mulheres: TMB = fator da taxa de atividade x
// {655 + [(9,6 x Peso(kg)) + (1,8 x Altura(cm)) – (4,7 x Idade(anos))]}
function calculoMulher() {
  let calcBasal =
    655 +
    (9.6 * pesoBasal.value + 1.8 * alturaBasal.value - 4.7 * idadeBasal.value);

  let calcBasalAtiv = atividade * calcBasal;

  resultadoBasalNaTela(calcBasal, calcBasalAtiv);
}

//Fórmula para homens: TMB = fator da taxa de atividade x
// {66 + [(13,7 x Peso(kg)) + ( 5 x Altura(cm)) – (6,8 x Idade(anos))]}
function calculoHomem() {
  let calcBasal =
    66 +
    (13.7 * pesoBasal.value + 5 * alturaBasal.value - 6.8 * idadeBasal.value);

  let calcBasalAtiv = atividade * calcBasal;

  resultadoBasalNaTela(calcBasal, calcBasalAtiv);
}

function resultadoBasalNaTela(calcBasal, calcBasalAtiv) {
  const resultado = document.createElement("p");
  resultado.classList = "result-basal";
  resultado.textContent = `${calcBasal.toFixed(0)} Kcal`;

  const resultadoAtividade = document.createElement("p");
  resultadoAtividade.classList = "result-atividade";
  resultadoAtividade.textContent = `${calcBasalAtiv.toFixed(0)} Kcal`;

  if (contBasal !== 0) {
    console.log(resultBasal);
    console.log(atividadeTela);
    resultBasal.childNodes[0].remove();
    atividadeTela.childNodes[0].remove();
  }

  resultBasal.append(resultado);
  atividadeTela.append(resultadoAtividade);
}

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
