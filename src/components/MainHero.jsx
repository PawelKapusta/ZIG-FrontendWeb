import React from "react";
import mainHeroImage from "../assets/characters/Main_hero.png";
import styles from "../styles/MainGameScreen.module.css";

const MainHero = () => {
  return (
    <div className={styles.MainHero}>
      <img id="MainHero" src={mainHeroImage} />
    </div>
  );
};

export default MainHero;
