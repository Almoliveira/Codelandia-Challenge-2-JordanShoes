import Jordans from "../types/Jordans";
import Product from "./Product";
import styles from "./ProductsDisplay.module.css";

const ProductsDisplay: React.FC = () => {
  const DUMMY_DATA: Jordans[] = [
    {
      id: 1,
      name: "Jordans 1",
      url: "1.png",
    },
    {
      id: 2,
      name: "Jordans 2",
      url: "2.png",
    },
    {
      id: 3,
      name: "Jordans 3",
      url: "3.png",
    },
    {
      id: 4,
      name: "Jordans 4",
      url: "4.png",
    },
    {
      id: 5,
      name: "Jordans 5",
      url: "5.png",
    },
    {
      id: 6,
      name: "Jordans 6",
      url: "6.png",
    },
    {
      id: 7,
      name: "Jordans 7",
      url: "7.png",
    },
    {
      id: 8,
      name: "Jordans 8",
      url: "8.png",
    },
  ];

  return (
    <div className={styles.productContainer}>
      <h1>Destaques</h1>
      <label>
        Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado
      </label>
      <div className={styles.cardContainer}>
        <div className={styles.cardMap}>
          {DUMMY_DATA.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
