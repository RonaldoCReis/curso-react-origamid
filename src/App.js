import React from 'react';
import Input from './form/Input';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });
  return (
    <form>
      <Input
        id="nome"
        label="Nome"
        type="text"
        value={form.nome}
        setValue={setForm}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={form.email}
        setValue={setForm}
      />
    </form>
  );
};
export default App;
