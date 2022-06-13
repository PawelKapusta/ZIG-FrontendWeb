import React, {useState, useContext} from "react";
import {GameContext} from "../store/gameContexts";
import wizardImage from "../assets/characters/Wizard.png";
import innkeeperImage from "../assets/characters/Innkeeper.png";
import dragonImage from "../assets/characters/Dragon.png";
import sheepImage from "../assets/characters/Sheep.png";
import styles from "../styles/MainGameScreen.module.css";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Coins from "./Coins";
import HP from "./HP";
import CloseIcon from "@mui/icons-material/Close";
import {useNavigate} from "react-router-dom";
import deathImage from '../assets/death.jpg';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import stylesEquipment from "../styles/Equipment.module.css";

const imagesPath = {
    Wizard: wizardImage,
    Dragon: dragonImage,
    Innkeeper: innkeeperImage,
    Sheep: sheepImage,
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    borderRadius: 4,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const NPCHero = ({name = "", NPCitems = [], attributes = []}) => {
    const currentItems = useState(NPCitems);
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [deathOpen, setDeathOpen] = React.useState(false);
    const [exchangeOpen, setExchangeOpen] = React.useState(false);
    const {
        hp,
        setHp,
        items,
        coins,
        setCoins,
        currentLocation,
        exchanging,
        setExchanging,
        exchanged,
        setExchanged,
        resetDataGame,
        npcLives, setNpcLives
    } = useContext(GameContext);
    const handleClose = () => {
        setOpen(false);
    };

    const handleDeathClose = () => {
        setDeathOpen(false);
    };

    const handleExchangeClose = () => {
        setExchangeOpen(false);
    };
    const getImagePathByCharacterName = name => {
        return imagesPath[name];
    };

    const showOptions = () => {
        setOpen(true);
    };

    const onFightClick = () => {
        const hpAfterFight = hp - Math.round((2 / 3) * attributes?.HP);
        if (hpAfterFight <= 0) {
            setHp(0);
            setDeathOpen(true);
        } else {
            setHp(hpAfterFight);
            if (attributes?.Money) {
                setCoins(coins + attributes?.Money);
            }
            setNpcLives({...npcLives, [name]: false});
            setOpen(false);
        }
    };

    console.log("setNpcLives", npcLives[name]);

    const onExchangeClick = () => {
        setOpen(false);
        setExchangeOpen(true);

    };

    const onMoveToMenu = () => {
        resetDataGame();
        navigate("/");
    };


    function toYoursExchange(event, itemName) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].Name === itemName) {
                setExchanging(items[i]);
                break;
            }
        }

    }

    function toNPCExchange(event, itemName) {
        for (var i = 0; i < NPCitems.length; i++) {
            if (NPCitems[i].Name === itemName) {
                setExchanged(NPCitems[i]);
                break;
            }
        }

    }

    const makeExchange = () => {
        if (exchanged !== null && exchanging !== null) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].Name === exchanging.Name) {
                    items.splice(i, 1);
                    items.push(exchanged);
                }
            }
            for (var i = 0; i < NPCitems.length; i++) {
                if (NPCitems[i].Name === exchanged.Name) {
                    NPCitems.splice(i, 1);
                    NPCitems.push(exchanging);
                }
            }
            handleExchangeClose();
        } else {
            setExchangeOpen(true);
        }


    }

    console.log(items);
    return (
        <React.Fragment>
            {npcLives[name] === true ? (
                <div>
                    <div className={styles.npcHero} onClick={showOptions}>
                        <img id={styles.NpcHero} src={getImagePathByCharacterName(name)} alt="NpcHero"/>
                    </div>
                    <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{...style}}>
                            <h2 id="child-modal-title">{name}</h2>
                            <div className={styles.npcAttributes}>
                                <HP isShowed healthPoints={attributes["HP"]} buttonStyle={{height: 10}}/>
                                {attributes["Money"] ? (
                                    <Coins isShowed money={attributes["Money"]} buttonStyle={{width: 10}}/>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div id={styles.npcHeroButtons}>
                                <Button id={styles.npcButton} className={styles.npcButton} onClick={onFightClick}>
                                    Fight
                                </Button>
                                {items?.length > 0 ? (
                                    <Button id={styles.npcButton} className={styles.npcButton}
                                            onClick={onExchangeClick}>
                                        Exchange
                                    </Button>

                                ) : (
                                    ""
                                )}
                            </div>
                            <Button
                                onClick={handleClose}
                                id={styles.npcHeroButtonClose}
                                endIcon={<CloseIcon style={{color: "black"}}/>}
                            />
                        </Box>
                    </Modal>
                    <Modal
                        hideBackdrop
                        open={deathOpen}
                        onClose={handleDeathClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{...style}}>
                            <h2 id="child-modal-title">Death</h2>
                            <img id={styles.npcHeroDeath} src={deathImage} alt="NpcHero"/>
                            <h5 id={styles.npcHeroDeathText}> You lost to {name} :( </h5>
                            <Button
                                onClick={handleDeathClose}
                                id={styles.npcHeroButtonClose}
                                endIcon={<CloseIcon style={{color: "black"}}/>}
                            />
                            <div id={styles.npcHeroButtons}>
                                <Button id={styles.npcButton} className={styles.npcButton} onClick={onMoveToMenu}>
                                    Go to Menu
                                </Button>
                            </div>
                        </Box>
                    </Modal>
                    <Modal
                        hideBackdrop
                        open={exchangeOpen}
                        onClose={handleExchangeClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{...style}}>
                            <h2 id="child-modal-title">Exchange</h2>
                            <Button
                                onClick={handleExchangeClose}
                                id={styles.npcHeroButtonClose}
                                endIcon={<CloseIcon style={{color: "black"}}/>}
                            />
                            <h2>Yours items</h2>
                            <Grid container spacing={3}>
                                {items.map(item => (
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
                                                toYoursExchange(e, item.Name);
                                            }}
                                        >
                                            {" "}
                                            Exchange
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>

                            <h2>{name}'s items</h2>
                            <Grid container spacing={3}>
                                {NPCitems.map(item => (
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
                                                toNPCExchange(e, item.Name);
                                            }}
                                        >
                                            {" "}
                                            Exchange
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>

                            <div id={styles.npcHeroButtons}>

                                <Button id={styles.npcButton} className={styles.npcButton} onClick={makeExchange}>
                                    Make Exchange
                                </Button>
                            </div>
                        </Box>
                    </Modal>

                </div>

            ) : (
                ""
            )}
        </React.Fragment>
    );
    console.log(items);
    return (
        <React.Fragment>
            {npcLives[name] === true ? (
                <div>
                    <div className={styles.npcHero} onClick={showOptions}>
                        <img id={styles.NpcHero} src={getImagePathByCharacterName(name)} alt="NpcHero"/>
                    </div>
                    <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{...style}}>
                            <h2 id="child-modal-title">{name}</h2>
                            <div className={styles.npcAttributes}>
                                <HP isShowed healthPoints={attributes["HP"]} buttonStyle={{height: 10}}/>
                                {attributes["Money"] ? (
                                    <Coins isShowed money={attributes["Money"]} buttonStyle={{width: 10}}/>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div id={styles.npcHeroButtons}>
                                <Button id={styles.npcButton} className={styles.npcButton} onClick={onFightClick}>
                                    Fight
                                </Button>
                                {items?.length > 0 ? (
                                    <Button
                                        id={styles.npcButton}
                                        className={styles.npcButton}
                                        onClick={onExchangeClick}
                                    >
                                        Exchange
                                    </Button>
                                ) : (
                                    ""
                                )}
                            </div>
                            <Button
                                onClick={handleClose}
                                id={styles.npcHeroButtonClose}
                                endIcon={<CloseIcon style={{color: "black"}}/>}
                            />
                        </Box>
                    </Modal>
                    <Modal
                        hideBackdrop
                        open={deathOpen}
                        onClose={handleDeathClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{...style}}>
                            <h2 id="child-modal-title">Death</h2>
                            <img id={styles.npcHeroDeath} src={deathImage} alt="NpcHero"/>
                            <h5 id={styles.npcHeroDeathText}> You lost to {name} :( </h5>
                            <Button
                                onClick={handleDeathClose}
                                id={styles.npcHeroButtonClose}
                                endIcon={<CloseIcon style={{color: "black"}}/>}
                            />
                            <div id={styles.npcHeroButtons}>
                                <Button id={styles.npcButton} className={styles.npcButton} onClick={onMoveToMenu}>
                                    Go to Menu
                                </Button>
                            </div>
                        </Box>
                    </Modal>
                </div>
            ) : (
                ""
            )}
        </React.Fragment>
    );
};

export default NPCHero;
