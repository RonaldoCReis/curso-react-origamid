import React from 'react';
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();
  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData() {
      const { response } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      );
      console.log(response);
    }

    fetchData();
  }, [request]);

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>

      {data &&
        data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
export default App;
