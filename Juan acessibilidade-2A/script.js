// script.js

// Botões de acessibilidade
const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoes = document.getElementById("opcoes-acessibilidade");
const aumentar = document.getElementById("aumentar-fonte");
const diminuir = document.getElementById("diminuir-fonte");

let tamanhoFonte = 100; // percentual base

// Abre/fecha menu de acessibilidade
botaoAcessibilidade.addEventListener("click", () => {
  const expanded = botaoAcessibilidade.getAttribute("aria-expanded") === "true";
  botaoAcessibilidade.setAttribute("aria-expanded", !expanded);
  opcoes.classList.toggle("d-none");
});

// Aumentar fonte
aumentar.addEventListener("click", () => {
  if (tamanhoFonte < 160) { // limite máximo
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  }
});

// Diminuir fonte
diminuir.addEventListener("click", () => {
  if (tamanhoFonte > 60) { // limite mínimo
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  }
});
