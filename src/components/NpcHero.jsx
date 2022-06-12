import React, { useState, useContext } from "react";
import { GameContext } from "../store/gameContexts";
import wizardImage from "../assets/characters/Wizard.png";
import innkeeperImage from "../assets/characters/Innkeeper.png";
import dragonImage from "../assets/characters/Dragon.png";
import sheepImage from "../assets/characters/Sheep.png";
import styles from "../styles/MainGameScreen.module.css";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Coins from "./Coins";
import HP from "./HP";
import CloseIcon from "@mui/icons-material/Close";

const imagesPath = {
  Wizard: wizardImage,
  Dragon: dragonImage,
  Innkeeper: innkeeperImage,
  Sheep: sheepImage,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 4,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const NPCHero = ({ name = '', items = [], attributes = [] }) => {
  const currentItems = useState(items);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const getImagePathByCharacterName = name => {
    return imagesPath[name];
  };

  const showOptions = () => {
    setOpen(true);
  };

  const onFightClick = () => {};

  const onExchangeClick = () => {};
  console.log(items)
  return (
    <div>
      <div className={styles.npcHero} onClick={showOptions}>
        <img id={styles.NpcHero} src={getImagePathByCharacterName(name)} alt="NpcHero" />
      </div>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="child-modal-title">{name}</h2>
          <div className={styles.npcAttributes}>
            <HP isShowed healthPoints={attributes["HP"]} buttonStyle={{ height: 10 }} />
            {attributes["Money"] ? (
              <Coins isShowed money={attributes["Money"]} buttonStyle={{ width: 10 }} />
            ) : (
              ""
            )}
          </div>
          <div id={styles.npcHeroButtons}>
            <Button id={styles.npcButton} className={styles.npcButton} onClick={onFightClick}>
              Fight
            </Button>
            {items?.length > 0 ? <Button id={styles.npcButton} className={styles.npcButton} onClick={onExchangeClick}>
              Exchange
            </Button> : ""}
          </div>
          <Button
            onClick={handleClose}
            id={styles.npcHeroButtonClose}
            endIcon={<CloseIcon style={{ color: "black" }} />}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default NPCHero;