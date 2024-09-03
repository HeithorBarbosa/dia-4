let name = prompt("digite seu nome:");
let idade = Number(prompt("qual é a sua idade ?"));

if (name === "heithor" && idade === 17) {
  console.log("você se chama heithor e tem 17 anos");
} else if (name === "heithor" || idade === 17) {
  console.log("seu nome é heithor OU você tem 17 anos");
} else {
  console.log("você é um impostor");
}
