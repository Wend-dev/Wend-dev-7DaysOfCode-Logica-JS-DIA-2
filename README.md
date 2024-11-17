# Simulador de Cadastro e Feedback

Este projeto é um programa simples que simula o cadastro e a personalização de mensagens em um sistema. Ele utiliza **JavaScript** para capturar respostas do usuário, exibir mensagens personalizadas e fornecer feedback com base nas respostas.

## Funcionalidades

1. **Perguntas Iniciais**:
   - O programa faz três perguntas ao usuário:
     - Qual o seu nome?
     - Quantos anos você tem?
     - Qual linguagem de programação você está estudando?

2. **Mensagem Personalizada**:
   - Com base nas respostas, o programa exibe a seguinte mensagem:
     ```
     Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!
     ```

3. **Exercício Opcional**:
   - Após a mensagem personalizada, o programa pergunta:
     ```
     Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
     ```
   - Dependendo da resposta, uma mensagem adicional é exibida:
     - **1 (SIM):** "Muito bom! Continue estudando e você terá muito sucesso."
     - **2 (NÃO):** "Ahh que pena... Já tentou aprender outras linguagens?"

## Como Executar

### No Console do Navegador

1. Abra o console do navegador (Ctrl+Shift+I no Chrome).
2. Copie e cole o código abaixo no console:

   ```javascript
   
   let nome = prompt("Qual o seu nome?");
   let idade = prompt("Quantos anos você tem?");
   let linguagem = prompt("Qual linguagem de programação você está estudando?");

   
   console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

   let gostaDeEstudar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

   if (gostaDeEstudar == 1) {
     console.log("Muito bom! Continue estudando e você terá muito sucesso.");
   } else if (gostaDeEstudar == 2) {
     console.log("Ahh que pena... Já tentou aprender outras linguagens?");
   } else {
     console.log("Resposta inválida. Por favor, responda apenas com 1 para SIM ou 2 para NÃO.");
   }
