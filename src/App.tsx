import "./App.css";
import HeaderPage from "./components/HeaderPage";
import ImageBanner from "./components/ImageBanner";
import ProductsDisplay from "./components/ProductsDisplay";

function App() {
  return (
    <div className="App">
      <main>
        <HeaderPage />
        <ImageBanner />
        <ProductsDisplay />
      </main>

      <footer className="footerPage">
        <p>Todos direitos Reservados</p>
      </footer>
    </div>
  );
}

export default App;
