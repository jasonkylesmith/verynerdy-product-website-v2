import './App.scss';
import ShoppingCartSection from './components/shoppingcart/ShoppingCartSection';
import Header from './components/main/Header';
import Main from './components/main/Main';
import Footer from './components/main/Footer';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { CartProvider, CartContext } from './components/main/ShoppingCartContext'



function App() {
  return (
    <div>
      <BrowserRouter>
      
        <CartProvider>
          <Header />
          <Main />
          <CartContext.Consumer>
              {context => (
                  <ShoppingCartSection show={context.cart.cart.showCart} />
              )}
          </CartContext.Consumer>
        </CartProvider>
        <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
