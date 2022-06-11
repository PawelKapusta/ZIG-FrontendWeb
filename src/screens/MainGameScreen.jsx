import React, { useContext } from "react";
import styles from "../styles/MainGameScreen.module.css";
import Equipment from "../components/Equipment";
import HP from "../components/HP";
import Coins from "../components/Coins";
import Teleport from "../components/Teleport";
import Travel from "../components/Travel";
import Nickname from "../components/Nickname";
import Menu from "../components/Menu";
import MainHero from "../components/MainHero";
import { GameContext } from "../store/gameContexts";

const MainGameScreen = () => {
  const nickname = localStorage.getItem("Nickname");
  let { hp, coins } = useContext(GameContext);

  const buttonStyle = {
    borderRadius: 10,
    backgroundColor: "rgba(224,229,229,0.81)",
    padding: "18px 25px",
    fontSize: "18px",
    textTransform: "none",
    position: "absolute",
  };

  return (
    <div className={styles.screen}>
      <HP buttonStyle={buttonStyle} healthPoints={hp} />

      <Coins buttonStyle={buttonStyle} money={coins} />

      <Equipment buttonStyle={buttonStyle} />

      <Teleport buttonStyle={buttonStyle} />

      <Travel buttonStyle={buttonStyle} />

      <Nickname nickname={nickname} />

      <Menu buttonStyle={buttonStyle} />

      <MainHero />
    </div>
  );
};

export default MainGameScreen;
