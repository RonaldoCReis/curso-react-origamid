import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  async function fetchDados() {
    const dado = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
    const json = await dado.json();
    setDados(json);
  }
  function limpaDados() {
    setDados(null);
  }
  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
    <GlobalContext.Provider value={{ dados, limpaDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
