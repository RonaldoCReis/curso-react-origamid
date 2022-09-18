// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

import React from 'react';

const App = () => {
  const fields = [
    {
      id: 'nome',
    },
    {
      id: 'email',
      type: 'email',
    },
    {
      id: 'senha',
      type: 'password',
    },
    {
      id: 'cep',
    },
    {
      id: 'rua',
    },
    {
      id: 'bairro',
    },
    {
      id: 'cidade',
    },
    {
      id: 'estado',
    },
  ];
  const [form, setForm] = React.useState(
    fields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {})
  );
  function inputChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  const [fetchResp, setFetchResp] = React.useState('');

  function submitForm(event) {
    event.preventDefault();
    setFetchResp('Enviando...');
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.ok) {
        setFetchResp('Enviado');
      } else {
        setFetchResp('Erro');
      }
    });
  }

  return (
    <form onSubmit={submitForm}>
      {fields.map(({ id, type }) => (
        <div key={id}>
          <label style={{ textTransform: 'capitalize' }} htmlFor={id}>
            {id}
          </label>
          <input
            type={type ? type : 'text'}
            id={id}
            value={form[id]}
            onChange={inputChange}
          ></input>
        </div>
      ))}

      <button>Enviar</button>
      {fetchResp && <p>{fetchResp}</p>}
    </form>
  );
};

export default App;
