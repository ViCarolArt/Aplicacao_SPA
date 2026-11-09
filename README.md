🌐 SPA — Modelos de Renderização Web

<p align="center">
  <img src="https://img.shields.io/badge/Projeto-Acadêmico-6C63FF?style=for-the-badge" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
</p><p align="center">
  Estudo prático sobre diferentes estratégias de renderização de aplicações web.
</p>---

✨ Sobre o projeto

Este projeto foi desenvolvido como atividade acadêmica da disciplina de Desenvolvimento Web III, com o objetivo de compreender e demonstrar três modelos de renderização utilizados no desenvolvimento de aplicações web.

A proposta apresenta exemplos inspirados em plataformas conhecidas, facilitando a compreensão de como cada estratégia funciona na prática.

🚀 Modelos apresentados

01. CSR — Client-Side Rendering

<p>
  <img src="https://img.shields.io/badge/Renderização-Navegador-4285F4?style=flat-square" />
</p>Exemplo: Gmail

A interface é construída pelo JavaScript diretamente no navegador.

- Atualização dinâmica de conteúdo.
- Navegação interativa.
- Renderização realizada no cliente.

02. SSG — Static Site Generation

<p>
  <img src="https://img.shields.io/badge/Renderização-Estática-2EA44F?style=flat-square" />
</p>Exemplo: Wikipedia

As páginas são geradas antecipadamente durante o processo de construção do projeto.

- HTML preparado previamente.
- Carregamento geralmente rápido.
- Ideal para conteúdos que não precisam mudar a cada requisição.

03. SSR — Server-Side Rendering

<p>
  <img src="https://img.shields.io/badge/Renderização-Servidor-8957E5?style=flat-square" />
</p>Exemplo: Nike

O servidor gera a página a cada requisição, enquanto o navegador pode executar funcionalidades interativas.

- Conteúdo gerado no servidor.
- Possibilidade de apresentar informações atualizadas.
- Interatividade com JavaScript.

---

📊 Comparação dos modelos

Característica| CSR| SSG| SSR
Renderização| Navegador| Antecipada| Servidor
Conteúdo| Dinâmico| Pré-gerado| Por requisição
Carregamento inicial| Variável| Geralmente rápido| Variável
Interatividade| Sim| Sim| Sim
Atualização| No cliente| Conforme regeneração| A cada requisição

🛠️ Tecnologias utilizadas

<p align="left">
  <img src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,nodejs,vscode" />
</p>- HTML5: estrutura das páginas.
- CSS3: estilização das interfaces.
- JavaScript: funcionalidades e interatividade.
- React: construção de componentes.
- Next.js: implementação dos modelos SSG e SSR.
- Node.js e npm: execução e gerenciamento dos projetos.
- Visual Studio Code: ambiente de desenvolvimento.

📁 Estrutura do projeto

SPA/
│
├── 01-CSR-GMAIL/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── 02-SSG-WIKIPEDIA/
│   ├── pages/
│   │   └── index.js
│   └── package.json
│
├── 03-SSR-NIKE/
│   ├── pages/
│   │   └── index.js
│   └── package.json
│
└── README.md

💻 Como executar o projeto

Pré-requisitos

- "Node.js" (https://nodejs.org/)
- "Visual Studio Code" (https://code.visualstudio.com/)

CSR — Gmail

Abra a pasta "01-CSR-GMAIL" e execute o arquivo "index.html" no navegador.

SSG — Wikipedia

cd 02-SSG-WIKIPEDIA
npm install
npm run dev

Acesse: "http://localhost:3000"

SSR — Nike

cd 03-SSR-NIKE
npm install
npm run dev -- -p 3001

Acesse: "http://localhost:3001"

---

🎓 Objetivos de aprendizagem

- Compreender os modelos de renderização web.
- Identificar as diferenças entre CSR, SSG e SSR.
- Desenvolver exemplos práticos utilizando JavaScript e Next.js.
- Conhecer vantagens e limitações de cada estratégia.
- Entender como essas tecnologias contribuem para a experiência do usuário.

📚 Referências

- "Next.js — Documentação oficial" (https://nextjs.org/docs)
- "Next.js — Static Site Generation" (https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- "Next.js — getServerSideProps" (https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)
- Material de aula — Desenvolvimento Web III.

---

<p align="center">
  <strong>Desenvolvido para fins acadêmicos 💜</strong>
  <br>
  Fatec Indaiatuba
  <br><br>
  <sub>Professora: Simone Mendes da Silva</sub>
</p><p align="center">
  ⭐ Obrigada por visitar este repositório!
</p>Observação: Gmail, Wikipedia e Nike são referências ilustrativas para os exemplos didáticos. O projeto não utiliza o código-fonte original dessas plataformas.
