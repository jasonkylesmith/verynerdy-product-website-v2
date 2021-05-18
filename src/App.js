import './App.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import StorySection from './components/StorySection';
import Footer from './components/Footer';
import Divider from './components/Divider';
import ToTopButton from './components/ToTopButton';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Divider />
      <ProductsSection />
      <Divider />
      <StorySection />
      <Divider />
      <ToTopButton />
      <Footer />
    </div>
  );
}

export default App;
