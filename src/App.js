import React from 'react';
import Input from './form/Input';
import Select from './form/Select';
import Radio from './form/Radio';
import Checkbox from './form/Checkbox';

const App = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    produto: '',
    cor: '',
  });
  const [linguagens, setLinguagens] = React.useState([]);
  return (
    <form>
      <Checkbox
        id="linguagens"
        value={linguagens}
        setValue={setLinguagens}
        options={['Javascript', 'PHP', 'Ruby']}
      />
      <Radio
        name="cor"
        options={['Azul', 'Vermelho']}
        value={form.cor}
        setValue={setForm}
      />
      <Select
        id="produto"
        value={form.produto}
        setValue={setForm}
        options={['smartphone', 'tablet']}
      />
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
