const emojis = [
  "🕵️‍♂️",
  "🕵️‍♂️",
  "👨‍🎓",
  "👨‍🎓",
  "👨‍🚀",
  "👨‍🚀",
  "🤺",
  "🤺",
  "⛷️",
  "⛷️",
  "🧙‍♂️",
  "🧙‍♂️",
  "🧛",
  "🧛",
  "🏄‍♂️",
  "🏄‍♂️",
]; // Emojis usados para o game

let openCards = []; // Guardar as cartas abertas

// Para cada elemento os que tiverem peso de -1 vai para trás e de 2 para frente
let suffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div"); //criar div dinamicamente
  box.className = "item";
  box.innerHTML = suffleEmojis[i]; //conteudo da div
  box.onclick = handleClick; // no clique chamar a função
  document.querySelector(".game").appendChild(box); //Coloca box como filha do "game" no html
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen"); //colocar classe nas 2 cartas clicadas
    openCards.push(this);
  }
  if (openCards.length === 2) {
    setTimeout(checkMatch, 500); // verificar se são iguais
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = []; //resetar openCard para poder selecionar 2 cartas novamente

  //Verificar se todas as cartas ja fizeram match
  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("YOU WIN!");
  }
}
