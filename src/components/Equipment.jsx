import React from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";

const Equipment = props => {
  const buttonStyle = props.buttonStyle;
  function onClick() {
    console.error(buttonStyle);
  }

  return (
    <div>
      <Button
        className={styles.buttonEquipment}
        style={buttonStyle}
        startIcon={<HomeRepairServiceRoundedIcon className={styles.buttonLogoEquipment} />}
        onClick={onClick}>
        Equipment
      </Button>
    </div>
  );
};

export default Equipment;
