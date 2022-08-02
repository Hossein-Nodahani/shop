import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


// contex
import {CartContext} from '../contexts/CartContextProvider';

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

            <div>
                    {/* <img src={loginIcon} alt="login-icon" /> */}
            </div>
            <div>
                    <Link to="/cart">سبد خرید</Link> 
                    {state.totalNumberOfProducts !=0 && <span>{state.totalNumberOfProducts}</span>}
                    {/* <img src={shopIcon} alt="shop" /> */}
            </div>
            this is header
        </header>
    );
};

export default Header;