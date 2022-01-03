import styles from "./HeaderPage.module.css";

const HeaderPage: React.FC = () => {
  return (
    <div>
      <header>
        <div className={styles.HeaderItemContainer}>
          <h3>Ganhe R$ 10,00 de desconto no frente</h3>
        </div>
        <div className={styles.HeaderItemContainer}>
          <h1>JordanShoes</h1>
        </div>
      </header>
    </div>
  );
};

export default HeaderPage;
