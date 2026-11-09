🌐 SPA — Modelos de Renderização Web

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Web III, com o objetivo de apresentar e demonstrar diferentes modelos de renderização de aplicações web.

O projeto aborda três estratégias: CSR (Client-Side Rendering), SSG (Static Site Generation) e SSR (Server-Side Rendering), utilizando exemplos inspirados em plataformas conhecidas.

📚 Sobre o projeto

O objetivo é compreender como cada modelo funciona, onde acontece a renderização e quais são suas principais características.

🔹 1. CSR — Gmail

Client-Side Rendering

- Renderização realizada no navegador.
- Utiliza JavaScript para construir a interface.
- Atualiza os conteúdos sem recarregar toda a página.

Exemplo: caixa de entrada inspirada no Gmail.

🔹 2. SSG — Wikipedia

Static Site Generation

- Páginas geradas antecipadamente.
- Conteúdo preparado durante o processo de build.
- Favorece carregamento rápido e otimização para mecanismos de busca.

Exemplo: artigo informativo inspirado na Wikipedia.

🔹 3. SSR — Nike

Server-Side Rendering

- Renderização realizada no servidor a cada requisição.
- Permite apresentar informações atualizadas.
- Pode combinar conteúdo renderizado no servidor com interatividade no navegador.

Exemplo: página de produto inspirada na loja Nike.

🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- React
- Next.js
- Node.js
- npm
- Visual Studio Code

📁 Estrutura do projeto

SPA/
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
└── 03-SSR-NIKE/
    ├── pages/
    │   └── index.js
    └── package.json

▶️ Como executar

CSR — Gmail

1. Abra a pasta "01-CSR-GMAIL" no VS Code.
2. Abra o arquivo "index.html" no navegador.
3. Se preferir, utilize a extensão Live Server.

SSG — Wikipedia

No terminal, acesse a pasta do projeto:

cd 02-SSG-WIKIPEDIA
npm install
npm run dev

Acesse: "http://localhost:3000"

SSR — Nike

Em outro terminal, acesse:

cd 03-SSR-NIKE
npm install
npm run dev -- -p 3001

Acesse: "http://localhost:3001"

📊 Comparação dos modelos

Característica| CSR| SSG| SSR
Renderização| Navegador| Antecipada| Servidor
Conteúdo| Dinâmico| Pré-gerado| Gerado por requisição
Primeiro carregamento| Pode ser mais lento| Geralmente rápido| Depende do servidor
Interatividade| JavaScript| JavaScript| JavaScript

🎯 Aprendizados

Durante o desenvolvimento, foram explorados:

- Diferenças entre estratégias de renderização.
- Funcionamento do JavaScript no navegador.
- Geração de páginas estáticas.
- Renderização de páginas no servidor.
- Estruturação de projetos com React e Next.js.

📖 Referências

- "Next.js — Documentação oficial" (https://nextjs.org/docs)
- "Next.js — Static Site Generation" (https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- "Next.js — Server-Side Rendering" (https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)
- Material de aula — Desenvolvimento Web III.

👩‍💻 Autoria

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Web III.

Professora: Simone Mendes da Silva.

Instituição: Fatec Indaiatuba.

---

Este projeto possui finalidade educacional. Os exemplos Gmail, Wikipedia e Nike são demonstrações didáticas inspiradas nas plataformas, não reproduções de seus códigos originais.
