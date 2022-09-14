import React from "react";

const Produto = ({ nome, preco }) => {
  return (
    <>
      <h2>{nome}</h2>
      <p>R$ {preco}</p>
    </>
  );
};

export default Produto;
