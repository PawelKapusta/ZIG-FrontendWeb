import React, { useState } from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";

const Coins = props => {
  const buttonStyle = props.buttonStyle;

  const [coin, setCoin] = useState(false);
  const coinAmount = props.money;
  const onCoinClick = () => {
    if (coin === true) {
      setCoin(false);
    } else {
      setCoin(true);
    }
    console.log(coin);
  };

  return (
    <div>
      <Button
        className={styles.buttonCoin}
        style={buttonStyle}
        startIcon={<PaidRoundedIcon className={styles.buttonLogoCoin} />}
        onClick={onCoinClick}>
        {coinAmount}
      </Button>
      {coin && (
        <div
          className={styles.messageCoin}
          style={{
            textTransform: "none",
            position: "absolute",
          }}>
          You have {coinAmount} Coins
        </div>
      )}
    </div>
  );
};

export default Coins;
