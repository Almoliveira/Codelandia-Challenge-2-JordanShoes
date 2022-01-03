import styles from "./ImageBanner.module.css";

const ImageBanner: React.FC = () => {
  return (
    <div>
      <div className="divContainer">
        <img
          className={styles.imageBanner}
          src={require("../assets/images/wallpaper.jpeg")}
          alt="banner"
        />
        <div className={styles.textBanner}>
          <div className={styles.textBannerContainer}>
            <h1>A melhor Loja de Jordans</h1>
            <label>
              <p>O tênis Jordan é fruto de uma velha e forte</p>
              <p>parceria entre a Nike e o jogador Michael Jordan</p>
            </label>
          </div>
        </div>
      </div>
      <p>-</p>
    </div>
  );
};

export default ImageBanner;
