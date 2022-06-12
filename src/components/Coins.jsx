import React, { useState } from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";

const Coins = ({ buttonStyle, money, isShowed }) => {
  const [coin, setCoin] = useState(false);
  const onCoinClick = () => {
    if (coin === true) {
      setCoin(false);
    } else {
      setCoin(true);
    }
    console.log(coin);
  };

  return (
    <div className={styles.attributesBox}>
      <Button
        className={styles.buttonCoin}
        style={buttonStyle}
        startIcon={<PaidRoundedIcon className={styles.buttonLogoCoin} />}
        onClick={onCoinClick}
      >
        {money}
      </Button>
      {coin && !isShowed && (
        <div
          className={styles.messageCoin}
          style={{
            textTransform: "none",
            position: "absolute",
          }}
        >
          You have {money} Coins
        </div>
      )}
    </div>
  );
};

export default Coins;
