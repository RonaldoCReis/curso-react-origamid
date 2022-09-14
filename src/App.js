import React from "react";
import Produto from "./Produto";

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = React.useState(null);
  function handleClick(event) {
    buscaProduto(event.target.innerText);
  }

  async function buscaProduto(prod) {
    const busca = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${prod}`
    );
    const json = await busca.json();
    setProduto(json);
  }

  React.useEffect(() => {
    if (localStorage.getItem("produto"))
      buscaProduto(localStorage.getItem("produto"));
  }, []);

  React.useEffect(() => {
    if (produto) {
      localStorage.setItem("produto", produto.id);
      console.log(produto.id);
    }
  }, [produto]);

  return (
    <div>
      <h1>Preferência: {produto && <span>{produto.nome}</span>}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {produto && <Produto nome={produto.nome} preco={produto.preco} />}
    </div>
  );
};
export default App;
