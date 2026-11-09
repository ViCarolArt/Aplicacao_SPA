export async function getStaticProps() {
  return {
    props: {
      titulo: "Inteligência Artificial",
      conteudo: "A Inteligência Artificial permite que máquinas realizem tarefas inteligentes."
    }
  };
}

export default function Artigo({ titulo, conteudo }) {
  return (
    <main>
      <h1>{titulo}</h1>
      <p>{conteudo}</p>
      <small>Artigo educativo - Exemplo SSG</small>
    </main>
  );
}