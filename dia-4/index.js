let name = prompt("qual é o seu nome ?");
let idade = Number(prompt("Qual sua idade"));
let carta = prompt("possuí CNH ?");
let carro = prompt("você tem carro ?");

if (idade <= 17 || carta === "não") {
  console.log(name, " ,voçê não pode dirigir");
} else if (idade >= 18 && carta === "sim" && carro === "não") {
  console.log(name, ", você pode dirigir porém não tem carro");
} else {
  console.log(name, ", você será o motora");
}
