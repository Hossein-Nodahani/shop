import React, { useEffect, useState } from 'react';

// functions
import { getProducts } from '../services/getProducts';


export const ProductsContext = React.createContext();


const ProductsContextProvider = ({children}) => {

    const [ productsData , setProductsData ] = useState( [] );
    
    useEffect( () => {
            const fetchAPI = async () => {
                setProductsData(await getProducts())
            }
            fetchAPI();
    }, [])


    return (
        <ProductsContext.Provider value={productsData}>
                {children}
        </ProductsContext.Provider>
    );
    
};

export default ProductsContextProvider;