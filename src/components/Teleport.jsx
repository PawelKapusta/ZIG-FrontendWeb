import React, { useContext, useState } from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";
import { GameContext } from "../store/gameContexts";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { getNewStateGame } from "../api/client";

const Teleport = props => {
  const buttonStyle = props.buttonStyle;
  let { teleportProduction, game, setGame } = useContext(GameContext);

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
        className={styles.buttonTeleport}
        style={buttonStyle}
        startIcon={<MeetingRoomRoundedIcon className={styles.buttonLogoTeleport} />}
        onClick={handleClickOpen}
      >
        Teleport
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose where you want to teleport</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {teleportProduction.map(location => {
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

export default Teleport;
