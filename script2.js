// Guarda as respostas do usuário
let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos você tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

// Exibe a mensagem
console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

// Pergunta se o usuário gosta da linguagem
let gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

// Resposta condicional
if (gostaDeEstudar == 1) {
  console.log("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostaDeEstudar == 2) {
  console.log("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
  console.log("Resposta inválida. Por favor, responda apenas com 1 para SIM ou 2 para NÃO.");
}
