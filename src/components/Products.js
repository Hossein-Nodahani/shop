import React , { useContext , useState } from 'react';
import Card from './Card';

import styles from '../styles/products.module.css'


import { ProductsContext } from '../contexts/ProductsContextProvider' ;

const Products = () => {

    const products = useContext(ProductsContext);

    return (
        <div className={styles.Cards}>
            { products.map( item => <Card  key={item.id}  data={item} />) } 
        </div>
    );
};

export default Products;