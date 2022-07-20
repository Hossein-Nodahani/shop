import React, { useEffect, useState } from 'react';

import { getProducts } from '../services/getProducts';

export const  Products = React.createContext();

const ProductsContext = (props) => {

    const [ productsData , setProductsData ] = useState( [] );
    
    useEffect( () => {
            const fetchAPI = async () => {
                setProductsData(await getProducts())
            }
            fetchAPI();
    }, [])

    return (
        <Products.Provider value={productsData}>
                {props.children}
        </Products.Provider>
    );
};

export default ProductsContext;