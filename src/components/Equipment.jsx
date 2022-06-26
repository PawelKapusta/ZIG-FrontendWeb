import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "../styles/MainGameScreen.module.css";
import stylesEquipment from "../styles/Equipment.module.css";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import { getNewStateGame } from "../api/client";
import {GameContext} from "../store/gameContexts";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import deathImage from "../assets/death.jpg";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Equipment = props => {
  const buttonStyle = props.buttonStyle;
  // let { game, setGame } = useContext(GameContext);

  const [open, setOpen] = useState(false);
  // const [deathOpen, setDeathOpen] = React.useState(false);
  // const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //let { items, coins, setCoins, hp, setHp, resetDataGame } = useContext(GameContext);
  let { items, coins, hp } = useContext(GameContext);
  console.log(items);
  // const handleDeathClose = () => {
  //   setDeathOpen(false);
  // };
  // const onMoveToMenu = () => {
  //   resetDataGame();
  //   navigate("/");
  // };

  // function toUse(event, itemName) {
  //   for (var i = 0; i < items.length; i++) {
  //     if (items[i].Name === itemName) {
  //       if (items[i].Attributes.IsPoison === true) {
  //         setHp(0);
  //         setDeathOpen(true);
  //       }
  //       if (items[i].Attributes.NutritionalValue > 0) {
  //         setHp(hp + items[i].Attributes.NutritionalValue);
  //       }
  //       items.splice(i, 1);
  //       break;
  //     }
  //   }
  //   handleClose();
  // }

  // function toSell(event, itemName) {
  //   for (var i = 0; i < items.length; i++) {
  //     if (items[i].Name === itemName) {
  //       setCoins(coins + items[i].Attributes.Value);
  //       items.splice(i, 1);
  //       break;
  //     }
  //   }
  //   handleClose();
  // }

  return (
    <div>
      <Button
        className={styles.buttonEquipment}
        style={buttonStyle}
        startIcon={<HomeRepairServiceRoundedIcon className={styles.buttonLogoEquipment} />}
         onClick={handleOpen}
      >
        Equipment
      </Button>
      { <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Equipment
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Typography>

          <Grid container spacing={3}>

            {items?.map(item => (
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
                    {item.Attributes.NutritionalValue?.valueOf() > 0 ? <Paper>Nutrition: {item.Attributes.NutritionalValue?.valueOf()} </Paper>:null}
                    {item.Attributes.IsPoison?.toString() == 'true'? <Paper>IsPoison</Paper>:null}

                    <Button
                        // onClick={e => {
                        //   toUse(e, item.Name);
                        // }}
                    >
                      {" "}
                      Use
                    </Button>

                  </Grid>
              ))}
          </Grid>



        </Box>
      </Modal>}
      {/*<Modal*/}
      {/*  hideBackdrop*/}
      {/*  open={deathOpen}*/}
      {/*  onClose={handleDeathClose}*/}
      {/*  aria-labelledby="child-modal-title"*/}
      {/*  aria-describedby="child-modal-description"*/}
      {/*>*/}
      {/*  <Box sx={{ ...style }}>*/}
      {/*    <h2 id="child-modal-title">Death</h2>*/}
      {/*    <img id={styles.npcHeroDeath} src={deathImage} alt="NpcHero" />*/}
      {/*    <h5 id={styles.npcHeroDeathText}> You lost :( </h5>*/}
      {/*    <Button*/}
      {/*      onClick={handleDeathClose}*/}
      {/*      id={styles.npcHeroButtonClose}*/}
      {/*      endIcon={<CloseIcon style={{ color: "black" }} />}*/}
      {/*    />*/}
      {/*    <div id={styles.npcHeroButtons}>*/}
      {/*      <Button id={styles.npcButton} className={styles.npcButton} onClick={onMoveToMenu}>*/}
      {/*        Go to Menu*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*  </Box>*/}
      {/*</Modal> }*/}
    </div>
  );
};

export default Equipment;
