import React, {useContext} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "../styles/MainGameScreen.module.css";
import stylesEquipment from "../styles/Equipment.module.css"
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {GameContext} from "../store/gameContexts";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Equipment = props => {
    const buttonStyle = props.buttonStyle;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let {items} = useContext(GameContext);

    function toUse(event, itemName) {
        for(var i=0; i<items.length;i++){
            if(items[i].Name === itemName){
                items.splice(i,1);
                break
            }
        }
        handleClose();

    }

    return (
        <div>

            <Button
                className={styles.buttonEquipment}
                style={buttonStyle}
                startIcon={<HomeRepairServiceRoundedIcon className={styles.buttonLogoEquipment} />}
                onClick={handleOpen}>
                Equipment
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" >
                        Equipment
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Typography>
                    <Grid container
                          spacing={3}>
                        {items.map(item => (
                            <Grid item key={item.Name} xs={4} sm={4} md={4} lg={4}>
                                <Paper> {item.Name}
                                    <img className={stylesEquipment.itemPhoto} src={require("../assets/items/" + item.Name + ".png" )} alt=""/>
                                </Paper>
                                <Paper>Value: {item.Attributes.Value}</Paper>
                                <Button onClick={(e) => {toUse(e,item.Name)}}> Use</Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default Equipment;
