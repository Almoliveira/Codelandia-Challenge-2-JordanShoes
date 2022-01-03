import styles from "./Product.module.css";

const Product: React.FC<{ id: number; name: string; url: string }> = (
  props
) => {
  return (
    <div className={styles.jordanCard}>
      <img
      className={styles.jordanImage}
        id={props.id.toString()}
        src={require("../assets/images/" + props.url)}
        alt="Jordans"
      />
    </div>
  );
};

export default Product;
