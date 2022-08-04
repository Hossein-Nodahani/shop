import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


// contex
import {CartContext} from '../contexts/CartContextProvider';


// style
import styles from "../styles/header.module.css"

// icon
import shopIcon from "../icons/shop.svg"
import loginIcon from "../icons/login.svg"


const Header = () => {

    const {state} = useContext(CartContext);

    return (
        <header>

            <ul>
                    <li><Link to="products" >products</Link></li>
            </ul>

            <div className={styles.icons}>
                    <div>
                            <img src={loginIcon} alt="login-icon" />
                    </div>
                    <div className={styles.shopIcon}>
                            <Link to="/cart"> <img src={shopIcon} alt="shop" /></Link> 
                            {state.totalNumberOfProducts !=0 && <span id={styles.cartCounter}>{state.totalNumberOfProducts}</span>}
                    </div>
            </div>
            
        </header>
    );
};

export default Header;