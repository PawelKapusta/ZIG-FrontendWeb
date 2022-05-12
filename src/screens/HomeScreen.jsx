import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Background from '../assets/homeScreen.jpg';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(
 createStyles({
   screen: {
     height: '100vh',
     width: '100vw',
     backgroundImage: `url(${Background})`,
     backgroundRepeat: 'no-repeat',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center'
   },
   button: {
     height: "80px",
     background: 'linear-gradient(to right, #0575e6, #021b79)',
     color: "#ffffff",
     width: "200px"
   }
 }),
);

const HomeScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onButtonClick = () => {
      navigate("/game");
  }

  return <div className={classes.screen}>
    <Button className={classes.button} endIcon={<SendIcon />} onClick={onButtonClick}>Rozpocznij grę!</Button>
  </div>;
};

export default HomeScreen;
