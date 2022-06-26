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
import {getNewStateGame} from "../api/client";

const ModalPickup = props => {
  const buttonStyle = props.buttonStyle;

  let { items, currentLocation, game, setGame, pickingProductions, setPickingProductions } = useContext(GameContext);
  let availableItems = currentLocation?.hasOwnProperty("Items") ? currentLocation.Items : [];

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

  async function onAddItemToEquipment(event, item) {
    const body = {
      world: game.world,
      production: item.production,
      variant: item.variant,
    };
    console.error(body);
    const response = await getNewStateGame(body);
    setGame(response);
    handleClose();
  }

  return (
    <div>
      {<Button
        className={styles.buttonAvailableItems}
        style={buttonStyle}
        onClick={seeAvailableItems}
      >
        Available items
      </Button>}
      {<Dialog open={open} onClose={handleClose}>
        <DialogTitle>You can possess those items </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {pickingProductions?.map(item => (
              <Grid item key={item.variant[2].WorldNodeName} xs={4} sm={4} md={4} lg={4}>
                <Paper>
                  {" "}
                  {item.variant[2].WorldNodeName}
                  <img
                    className={stylesEquipment.itemPhoto}
                    src={require("../assets/items/" + item.variant[2].WorldNodeName + ".png")}
                    alt=""
                  />
                </Paper>
                 {item.variant[2].WorldNodeAttr?.Value > 0 ?  <Paper>Value: {item?.variant[2].WorldNodeAttr.Value}</Paper>: null}
                {item.variant[2].WorldNodeAttr?.NutritionalValue?.valueOf() > 0 ? <Paper>Nutrition: {item.variant[2].WorldNodeAttr.NutritionalValue?.valueOf()} </Paper>:null}
                {item.variant[2].WorldNodeAttr?.IsPoison?.toString() == 'true'? <Paper>IsPoison</Paper>:null}
                <Button
                  onClick={e => {
                    onAddItemToEquipment(e, item);
                  }}
                >
                  {" "}
                  Take item
                </Button>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog> }
    </div>
  );
};
export default ModalPickup;
