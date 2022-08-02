import React , {useContext} from 'react';
import { useParams } from 'react-router-dom';

// Context
import { ProductsContext } from '../contexts/ProductsContextProvider' ;


const Details = () => {

    // get id from params
    const params = useParams() ;
    const { id } = params ;

    // get context
    const products = useContext(ProductsContext);

    // get product data from context
    const {title, category , description , image , price } = products[id-1];

    return (
        <div>
            <h3> {title}</h3>
            <p> <span>Category : </span> {category}</p>
            <p> <span>Description : </span> {description}</p>
            <p> <span>Price : </span> {price} $</p>
            <img src={image} />

        </div>
    );
};

export default Details;