import React, { useContext, useState } from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import SnowshoeingRoundedIcon from "@mui/icons-material/SnowshoeingRounded";
import { GameContext } from "../store/gameContexts";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getNewStateGame } from "../api/client";

const Travel = props => {
  const buttonStyle = props.buttonStyle;
  let { travelProduction, game, setGame } = useContext(GameContext);

  async function onLocationChange(choosenLocation) {
    setOpen(false);
    const body = {
      world: game.world,
      production: choosenLocation.production,
      variant: choosenLocation.variant,
    };
    console.error(body);
    const response = await getNewStateGame(body);
    setGame(response);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={styles.buttonTravel}
        style={buttonStyle}
        startIcon={<SnowshoeingRoundedIcon className={styles.buttonLogoTravel} />}
        onClick={handleClickOpen}
      >
        Travel
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose where you want to travel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {travelProduction.map(location => {
              return (
                <Button
                  key={location.variant[2].WorldNodeId}
                  variant="contained"
                  style={{ margin: "5px" }}
                  onClick={() => onLocationChange(location)}
                >
                  {location.variant[2].WorldNodeName}
                </Button>
              );
            })}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Travel;
