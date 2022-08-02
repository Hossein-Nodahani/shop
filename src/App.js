import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom';

import Products from './components/Products';
import Details from './components/Details';

// contexts
import ProductsContextProvider from './contexts/ProductsContextProvider';
import CartContextProvider from './contexts/CartContextProvider';


function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
         <CartContextProvider>
                      <Routes>
                              <Route path="/products"  element={<Products/>} />
                              <Route path="/products/:id"  element={<Details />} />
                              <Route path="/*" element={<Navigate to="/products"/>} />
                      </Routes>
          </CartContextProvider>
        </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
