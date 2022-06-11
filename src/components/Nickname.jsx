import React from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Chip } from "@mui/material";

const Nickname = props => {
  const nickname = props.nickname;

  return (
    <div>
      <Chip
        className={styles.chipMainHero}
        label={nickname}
        style={{
          backgroundColor: "rgba(224,229,229,0.81)",
          padding: "18px 25px",
          fontSize: "18px",
          textTransform: "none",
          position: "absolute",
          marginTop: "16px",
        }}></Chip>
    </div>
  );
};

export default Nickname;
