export async function getServerSideProps() {
  const produto = {
    nome: "Nike Air Max",
    preco: 599.90,
    descricao: "Tênis esportivo para uso diário."
  };
  return { props: { produto } };
}

export default function Produto({ produto }) {
  return (
    <main>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <h2>R$ {produto.preco.toFixed(2)}</h2>
      <button onClick={() => alert("Produto adicionado ao carrinho!")}>
        Comprar
      </button>
    </main>
  );
}