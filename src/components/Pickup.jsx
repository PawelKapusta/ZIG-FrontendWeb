import React, { useContext, useState } from "react";
import { GameContext } from "../store/gameContexts";
import { Button } from "@mui/material";
import styles from "../styles/MainGameScreen.module.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import stylesEquipment from "../styles/Equipment.module.css";

const ModalPickup = props => {
  const buttonStyle = props.buttonStyle;

  let { items, currentLocation } = useContext(GameContext);
  let availableItems = currentLocation.Items;

  function seeAvailableItems() {
    handleClickOpen();
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function toGet(event, itemName) {
    for (var i = 0; i < availableItems.length; i++) {
      if (availableItems[i].Name === itemName) {
        items.push(availableItems[i]);
        availableItems.splice(i, 1);
        break;
      }
    }
    handleClose();
  }

  return (
    <div>
      <Button
        className={styles.buttonAvailableItems}
        style={buttonStyle}
        onClick={seeAvailableItems}
      >
        Available items
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>You can possess those items </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {availableItems.map(item => (
              <Grid item key={item.Name} xs={4} sm={4} md={4} lg={4}>
                <Paper>
                  {" "}
                  {item.Name}
                  <img
                    className={stylesEquipment.itemPhoto}
                    src={require("../assets/items/" + item.Name + ".png")}
                    alt=""
                  />
                </Paper>
                <Paper>Value: {item.Attributes.Value}</Paper>
                <Paper>Nutritional: {item.Attributes.NutritionalValue}</Paper>
                <Paper>IsPoison: {item.Attributes.IsPoison}</Paper>
                <Button
                  onClick={e => {
                    toGet(e, item.Name);
                  }}
                >
                  {" "}
                  Get
                </Button>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default ModalPickup;
