let fome = prompt("você está com fome?");
let dinheiro = Number(prompt("você tem dinheiro ?"));
let restaurante = prompt("o restaurante está aberto hoje ?");

if (fome === "não" || dinheiro === "não") {
  console.log("Hoje a janta será em casa");
} else if (fome === "sim" && dinheiro === "sim" && restaurante === "não") {
  console.log("Peca um delivery");
} else {
  console.log("vamos no seu restaurante preferido");
}
