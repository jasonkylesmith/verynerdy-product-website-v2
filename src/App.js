import './App.scss';
import ShoppingCartSection from './components/ShoppingCartSection';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider, CartContext } from './components/ShoppingCartContext'



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
