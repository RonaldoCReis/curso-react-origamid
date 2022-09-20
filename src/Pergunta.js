import React from 'react';
import Radio from './form/Radio';

const Pergunta = ({
  pergunta,
  options,
  resposta,
  id,
  setPergunta,
  setAcertos,
}) => {
  const [value, setValue] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (value === resposta) setAcertos((acertos) => acertos + 1);
    setPergunta((pergunta) => pergunta + 1);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ marginBottom: '1rem' }}>
        <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
        <Radio
          style={{ marginBottom: '1rem', marginTop: '1rem' }}
          options={options}
          value={value}
          setValue={setValue}
          name={id}
          required
        />
      </fieldset>
      <button>Próxima</button>
    </form>
  );
};

export default Pergunta;
