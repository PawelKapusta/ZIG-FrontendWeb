import React, { useContext, useEffect } from "react";
import styles from "../styles/HomeScreen.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { OldWorldContext } from "../store/oldWorldContext";

const HomeScreen = () => {
  const navigate = useNavigate();
  const { readFileOnUpload } = useContext(OldWorldContext);
  const nickname = localStorage.getItem("Nickname");

  const onButtonClick = () => {
    if (nickname !== undefined || nickname !== null || nickname !== "") {
      navigate("/main-game");
    } else {
      navigate("/nick");
    }
  };

  return (
    <div className={styles.screen}>
      <Button
        id={styles.button}
        className={styles.button}
        endIcon={<SendIcon />}
        onClick={onButtonClick}
      >
        Rozpocznij grę!
      </Button>
      <div className={styles.reader}>
        <label className={styles.headerFile}>Załaduj zapisaną grę </label>
        <div>
          <br></br>
        </div>
        <input
          type="file"
          className={styles.fileReader}
          onChange={e => readFileOnUpload(e.target.files[0])}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
