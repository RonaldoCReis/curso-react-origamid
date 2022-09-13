import React from "react";

const App = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <button onClick={handleClick} disabled={!ativo}>
      {ativo ? "Ativo" : "Inativo"}
    </button>
    // <></>
  );
};
export default App;
