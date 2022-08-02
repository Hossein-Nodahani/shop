import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';


// components
import Header from './components/Header';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';

// contexts
import ProductsContextProvider from './contexts/ProductsContextProvider';
import CartContextProvider from './contexts/CartContextProvider';


function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
         <CartContextProvider>
                      <Header />
                      <Routes>
                              <Route path="/products"  element={<Products/>} />
                              <Route path="/products/:id"  element={<Details />} />
                              <Route path="/cart"  element={<Cart/>} />
                              <Route path="/*" element={<Navigate to="/products"/>} />
                      </Routes>
          </CartContextProvider>
        </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
