import React from 'react';
import Head from '../Head';
import Loading from '../Loading';
import ProductHome from '../ProductHome';
import styles from './Products.module.css';

const Products = () => {
  const [productList, setProductList] = React.useState([]);
  const fetchProducts = React.useCallback(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((response) => setProductList(response));
  }, []);

  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  if (!productList.length > 0) return <Loading />;
  return (
    <section className={[styles.products, 'animLeft'].join(' ')}>
      <Head title="Produtos" />
      {productList.length > 0 &&
        productList.map((product) => (
          <div key={product.id} className={styles.productContainer}>
            <ProductHome
              title={product.nome}
              img={product.fotos[0].src}
              id={product.id}
            />
          </div>
        ))}
    </section>
  );
};

export default Products;
