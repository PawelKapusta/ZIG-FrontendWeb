import React from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = props => {
  const buttonStyle = props.buttonStyle;
  function onClick() {
    console.error(buttonStyle);
  }

  return (
    <div>
      <Button
        className={styles.buttonMenu}
        style={buttonStyle}
        startIcon={<MenuIcon className={styles.buttonLogoMenu} />}
        onClick={onClick}>
        Menu
      </Button>
    </div>
  );
};

export default Menu;
