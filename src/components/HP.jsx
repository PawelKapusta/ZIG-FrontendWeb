import React, { useState } from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const HP = props => {
  const buttonStyle = props.buttonStyle;

  const [hp, setHp] = useState(false);
  const HpAmount = props.healthPoints;
  const onHpClick = () => {
    if (hp === true) {
      setHp(false);
    } else {
      setHp(true);
    }
    console.log(hp);
  };

  return (
    <div>
      <Button
        className={styles.buttonHeart}
        style={buttonStyle}
        startIcon={<FavoriteRoundedIcon className={styles.buttonLogoHeart} />}
        onClick={onHpClick}>
        {HpAmount}
      </Button>

      {hp && (
        <div
          className={styles.messageHP}
          style={{
            textTransform: "none",
            position: "absolute",
          }}>
          You have {HpAmount} HP
        </div>
      )}
    </div>
  );
};

export default HP;
