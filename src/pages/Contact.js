import React from 'react';
import Head from '../Head';
import imgContato from '../img/contato.jpg';
import styles from './Contact.module.css';
const Contact = () => {
  return (
    <section className={[styles.contact, 'animLeft'].join(' ')}>
      <Head title="Contato" />
      <img src={imgContato} alt="contato" />
      <div>
        <h1>Entre em contato.</h1>
        <ul>
          <li>ronaldocreis7@gmail.com</li>
          <li>11 94259-4783</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
