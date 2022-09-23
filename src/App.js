// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Products from './pages/Products';
import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/produto/:id/*" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
