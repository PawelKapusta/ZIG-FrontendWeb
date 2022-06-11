import React from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import SnowshoeingRoundedIcon from "@mui/icons-material/SnowshoeingRounded";

const Travel = props => {
  const buttonStyle = props.buttonStyle;
  function onClick() {
    console.error(buttonStyle);
  }

  return (
    <div>
      <Button
        className={styles.buttonTravel}
        style={buttonStyle}
        startIcon={<SnowshoeingRoundedIcon className={styles.buttonLogoTravel} />}
        onClick={onClick}>
        Travel
      </Button>
    </div>
  );
};

export default Travel;
