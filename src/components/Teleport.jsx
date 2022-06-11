import React from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";

const Teleport = props => {
  const buttonStyle = props.buttonStyle;
  function onClick() {
    console.error(buttonStyle);
  }

  return (
    <div>
      <Button
        className={styles.buttonTeleport}
        style={buttonStyle}
        startIcon={<MeetingRoomRoundedIcon className={styles.buttonLogoTeleport} />}
        onClick={onClick}>
        Teleport
      </Button>
    </div>
  );
};

export default Teleport;
