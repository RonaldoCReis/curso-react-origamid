import React from 'react';

const App = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];
  const [cores, setCores] = React.useState([]);
  function handleCheck({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }
  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            onChange={handleCheck}
            checked={cores.includes(cor)}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};
export default App;
