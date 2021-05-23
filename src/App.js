import './App.scss';
import { ShoppingCartHandler } from './components/ShoppingCartHandler';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './components/ShoppingCartContext'


function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Main />
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
