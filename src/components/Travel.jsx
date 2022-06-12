import React, { useContext, useState } from "react";
import styles from "../styles/MainGameScreen.module.css";
import { Button } from "@mui/material";
import SnowshoeingRoundedIcon from "@mui/icons-material/SnowshoeingRounded";
import { GameContext } from "../store/gameContexts";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Wizards_hut from "../assets/Wizards_hut.jpg";
import Road from "../assets/landscape.jpg";
import Dragons_lair from "../assets/Dragons_lair.jpg";
import Forest from "../assets/Forest.jpg";
import Pasture from "../assets/Pasture.jpg";
import Village from "../assets/Village.jpg";
import Inn from "../assets/Inn.jpg";
import Prison from "../assets/Prison.jpg";

const Travel = props => {
  const buttonStyle = props.buttonStyle;

  let { currentLocation, setCurrentLocation, locations, setBackgroundImage } =
    useContext(GameContext);

  const availableTravelIds = currentLocation.Connections.map(loc => {
    return loc.Destination;
  });
  const allLocations = locations.map(location => {
    return { id: location.Id, name: location.Name };
  });

  const availableTravels = allLocations.filter(location => {
    return availableTravelIds.includes(location.id);
  });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function onLocationChange(choosenLocation) {
    setOpen(false);
    await sleep(200);
    const newLocation = locations.filter(location => {
      return location.Id === choosenLocation.id;
    });
    setCurrentLocation(newLocation[0]);

    switch (newLocation[0].Name) {
      case "Road":
        setBackgroundImage(Road);
        break;
      case "Wizards_hut":
        setBackgroundImage(Wizards_hut);
        break;
      case "Dragons_lair":
        setBackgroundImage(Dragons_lair);
        break;
      case "Forest":
        setBackgroundImage(Forest);
        break;
      case "Pasture":
        setBackgroundImage(Pasture);
        break;
      case "Village":
        setBackgroundImage(Village);
        break;
      case "Inn":
        setBackgroundImage(Inn);
        break;
      case "Prison":
        setBackgroundImage(Prison);
        break;
      default:
        setBackgroundImage(Road);
    }
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
        onClick={handleClickOpen}>
        Travel
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose where you want to travel</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {availableTravels.map(location => {
              return (
                <Button
                  key={location.id}
                  variant="contained"
                  style={{ margin: "5px" }}
                  onClick={() => onLocationChange(location)}>
                  {location.name}
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
