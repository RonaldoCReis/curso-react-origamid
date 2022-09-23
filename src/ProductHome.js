import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductHome.module.css';

const ProductHome = ({ img, title, id }) => {
  return (
    <div className={styles.product}>
      <Link to={`/produto/${id}`} style={{ textDecoration: 'none' }}>
        <img src={img} alt={title} />
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default ProductHome;
