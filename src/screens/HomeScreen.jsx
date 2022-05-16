import React from "react";
import styles from '../styles/HomeScreen.module.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const onButtonClick = () => {
      navigate("/game");
  }

  return <div className={styles.screen}>
    <Button id={styles.button} className={styles.button} endIcon={<SendIcon />} onClick={onButtonClick}>Rozpocznij grę!</Button>
  </div>;
};

export default HomeScreen;
