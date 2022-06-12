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
import VerticalCenteredModal from "../components/Modal";
import { GameContext } from "../store/gameContexts";
import ModalPickup from "../components/Pickup";
import NPCHero from "../components/NpcHero";

const modalHeader = "Instrukcja gry 'Dragon Story'";
const modalInfo =
  "                    Jesteś głównym bohaterem gry. Twoim celem w tej misji jest zdobycie smoczego jaja\n" +
  "                    pilnowanego przez groźnego smoka. Smoka możesz zabić w walce (pod warunkiem, że uzyskasz odpowiednio dużo siły),\n" +
  "                    otruć lub wypłoszyć z legowiska. Siłę zwiększamy jedząc obiekty o dużej wartości odżywczej, truciznę dostaniemy\n" +
  "                    od przyjaciół lub pozyskamy z trujących roślin.";

const MainGameScreen = () => {
  const nickname = localStorage.getItem("Nickname");
  let { hp, coins, backgroundImage, currentLocation } = useContext(GameContext);

  const buttonStyle = {
    borderRadius: 10,
    backgroundColor: "rgba(224,229,229,0.81)",
    padding: "18px 25px",
    fontSize: "18px",
    textTransform: "none",
    position: "absolute",
  };

  return (
    <div
      className={styles.screen}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <HP buttonStyle={buttonStyle} healthPoints={hp} />

      <Coins buttonStyle={buttonStyle} money={coins} />

      <Equipment buttonStyle={buttonStyle} />

      <Teleport buttonStyle={buttonStyle} />

      <Travel buttonStyle={buttonStyle} />

      <Nickname nickname={nickname} />

      <Menu buttonStyle={buttonStyle} />
      <VerticalCenteredModal
        buttonName="Start here"
        modalInfo={modalInfo}
        modalHeader={modalHeader}
      />

      <ModalPickup buttonStyle={buttonStyle} />
      <MainHero />
      {currentLocation?.Characters?.length !== 0 &&
      currentLocation?.Characters &&
      currentLocation?.Characters[0]?.Name !== "Main_hero" ? (
        <NPCHero
          items={currentLocation?.Characters[0]?.Items ? currentLocation?.Characters[0]?.Items : []}
          name={currentLocation?.Characters[0]?.Name ? currentLocation?.Characters[0]?.Name : []}
          attributes={
            currentLocation?.Characters[0]?.Attributes
              ? currentLocation?.Characters[0]?.Attributes
              : []
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default MainGameScreen;
