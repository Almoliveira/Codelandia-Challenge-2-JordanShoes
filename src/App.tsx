import './App.css';
import HeaderPage from './components/HeaderPage';
import ImageBanner from './components/ImageBanner';
import ProductsDisplay from './components/ProductsDisplay';


function App() {
  return (
    <div className="App">
      <HeaderPage />
      <ImageBanner />
      <ProductsDisplay />
    </div>
  );
}

export default App;
