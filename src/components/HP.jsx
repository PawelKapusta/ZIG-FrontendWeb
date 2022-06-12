import React, { useState } from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const HP = ({ buttonStyle, healthPoints, isShowed }) => {
  const [hp, setHp] = useState(false);
  const onHpClick = () => {
    if (hp === true) {
      setHp(false);
    } else {
      setHp(true);
    }
    console.log(hp);
  };

  return (
    <div className={styles.attributesBox}>
      <Button
        className={styles.buttonHeart}
        style={buttonStyle}
        startIcon={<FavoriteRoundedIcon className={styles.buttonLogoHeart} />}
        onClick={onHpClick}
      >
        {healthPoints}
      </Button>

      {hp && !isShowed && (
        <div
          className={styles.messageHP}
          style={{
            textTransform: "none",
            position: "absolute",
          }}
        >
          You have {healthPoints} HP
        </div>
      )}
    </div>
  );
};

export default HP;
