import React from 'react';
import { GlobalContext } from './GlobalContext';
const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <>
      <div>Produto: {global.dados && <span>{global.dados[0].nome}</span>}</div>
      <button onClick={() => global.limpaDados()}>Limpar</button>
    </>
  );
};

export default Produto;
