import React from 'react';
import { useParams } from 'react-router-dom';
import Head from '../Head';
import Loading from '../Loading';
import styles from './Product.module.css';

const Product = () => {
  const params = useParams();
  const [productData, setProductData] = React.useState({});

  const fetchProduct = React.useCallback(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((response) => response.json())
      .then((response) => setProductData(response));
  }, [params]);

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  if (!productData.id) return <Loading />;
  return (
    <section className={[styles.product, 'animLeft'].join(' ')}>
      <Head title={productData.nome} />
      <div className={styles.images}>
        {productData.fotos &&
          productData.fotos.map((foto) => (
            <img key={foto.titulo} alt={foto.titulo} src={foto.src}></img>
          ))}
      </div>
      <div className={styles.desc}>
        <h1>{productData.nome}</h1>
        <p className={styles.price}>R$ {productData.preco}</p>
        <p className={styles.text}>{productData.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
