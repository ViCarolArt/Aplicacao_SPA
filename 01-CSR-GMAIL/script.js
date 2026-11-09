const mensagens = [
  { remetente: "Ana", assunto: "Reunião amanhã" },
  { remetente: "João", assunto: "Trabalho da faculdade" },
  { remetente: "Maria", assunto: "Nova mensagem" }
];

const caixa = document.getElementById("emails");
caixa.innerHTML = mensagens.map(email =>
  `<div class="email"><strong>${email.remetente}</strong><p>${email.assunto}</p></div>`
).join("");