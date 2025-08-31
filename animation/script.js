// ====== CARROSSEL ======
const imagens = document.querySelectorAll(".carrossel img");
const legenda = document.querySelector(".carrossel .legenda");
const setaEsquerda = document.querySelector(".seta.esquerda");
const setaDireita = document.querySelector(".seta.direita");

const legendas = [
  "Meio Ambiente e Sustentabilidade",
  "componente curricular de sociologia",
  "Jogos Escolares"
];

let index = 0;

// função para mostrar imagem
function mostrarImagem(n) {
  imagens.forEach((img, i) => {
    img.classList.remove("active");
    if (i === n) {
      img.classList.add("active");
    }
  });
  legenda.textContent = legendas[n];
}

// botões de navegação
setaDireita.addEventListener("click", () => {
  index = (index + 1) % imagens.length;
  mostrarImagem(index);
});

setaEsquerda.addEventListener("click", () => {
  index = (index - 1 + imagens.length) % imagens.length;
  mostrarImagem(index);
});

// troca automática a cada 5s
setInterval(() => {
  index = (index + 1) % imagens.length;
  mostrarImagem(index);
}, 5000);

// iniciar
mostrarImagem(index);



// ====== MENU MOBILE (opcional) ======
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-btn");

const nav = document.querySelector(".nav-links");
document.querySelector(".navbar").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
