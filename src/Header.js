import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.btnContainer}>
        <Link to="/">
          <button className={styles.btn}>Produtos</button>
        </Link>
      </div>
      <div className={styles.btnContainer}>
        <Link to="/contato">
          <button className={styles.btn}>Contato</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
