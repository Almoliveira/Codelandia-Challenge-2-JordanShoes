import styles from "./ImageBanner.module.css";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const ImageBanner: React.FC = () => {
  const header = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (header.current) {
      const typed = new Typed(header.current, {
        //é Necessario passar um Array, ele não pode conter um element unico
        strings: ["A melhor Loja de Jordans","A melhor Loja de Jordans"],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: true,
        showCursor: true,
        cursorChar: "",
      });

      // Destropying
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div className={styles.imageBanner}>
        <div className={styles.textBanner}>
          <div className={styles.textBannerContainer}>
            <h1 ref={header}>-</h1>
            <label>
              <p>O tênis Jordan é fruto de uma velha e forte</p>
              <p>parceria entre a Nike e o jogador Michael Jordan</p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
