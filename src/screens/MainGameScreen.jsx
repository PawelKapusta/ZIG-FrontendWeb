import React, {useState} from "react";
import mainHeroImage from '../assets/characters/main-hero.png';
import styles from '../styles/MainGameScreen.module.css';
import {Button} from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import SnowshoeingRoundedIcon from '@mui/icons-material/SnowshoeingRounded';


const MainGameScreen = () => {
    const nickname = localStorage.getItem("Nickname");
    const [hp, setHp] = useState(false);
    const [coin, setCoin] = useState(false);
    const coinAmount = 10;
    const HpAmount = 100;
    const onHpClick = () => {
        if (hp === true) {
            setHp(false);
        } else {
            setHp(true);
        }
        console.log(hp);
    }
    const onCoinClick = () => {
        if (coin === true) {
            setCoin(false);
        } else {
            setCoin(true);
        }
        console.log(coin);
    }

    return <div className={styles.screen}>
        <Button className={styles.buttonHeart} style={{
            borderRadius: 10,
            backgroundColor: "rgba(224,229,229,0.81)",
            padding: "18px 25px",
            fontSize: "18px",
            textTransform: 'none',
            position: "absolute",
        }} startIcon={<FavoriteRoundedIcon className={styles.buttonLogoHeart}/>} onClick={onHpClick}>
            {HpAmount}
        </Button>

        {hp && (<div className={styles.messageHP} style={{
            textTransform: 'none',
            position: "absolute",
        }}>You have {HpAmount} HP</div>)}


        <Button className={styles.buttonCoin} style={{
            borderRadius: 10,
            backgroundColor: "rgba(224,229,229,0.81)",
            padding: "18px 25px",
            fontSize: "18px",
            textTransform: 'none',
            position: "absolute",

        }} startIcon={<PaidRoundedIcon className={styles.buttonLogoCoin}/>} onClick={onCoinClick}>
            {coinAmount}
        </Button>
        {coin && (<div className={styles.messageCoin} style={{
            textTransform: 'none',
            position: "absolute",
        }}>You have {coinAmount} Coins</div>)}


        <Button className={styles.buttonEquipment} style={{
            borderRadius: 10,
            backgroundColor: "rgba(224,229,229,0.81)",
            padding: "18px 25px",
            fontSize: "18px",
            textTransform: 'none',
            position: "absolute",

        }} startIcon={<HomeRepairServiceRoundedIcon className={styles.buttonLogoEquipment}/>}>
            Equipment
        </Button>


        <img src={mainHeroImage} alt="Adam"/>

        <Button className={styles.buttonTeleport} style={{
            borderRadius: 10,
            backgroundColor: "rgba(224,229,229,0.81)",
            padding: "18px 25px",
            fontSize: "18px",
            textTransform: 'none',
            position: "absolute",

        }} startIcon={<MeetingRoomRoundedIcon className={styles.buttonLogoTeleport}/>}>
            Teleport
        </Button>

        <Button className={styles.buttonTravel} style={{
            borderRadius: 10,
            backgroundColor: "rgba(224,229,229,0.81)",
            padding: "18px 25px",
            fontSize: "18px",
            textTransform: 'none',
            position: "absolute",

        }} startIcon={<SnowshoeingRoundedIcon className={styles.buttonLogoTravel}/>}>
            Travel
        </Button>

        <Button className={styles.buttonMainHero} style={{
            borderRadius: 10,
            backgroundColor: "rgba(224,229,229,0.81)",
            padding: "18px 25px",
            fontSize: "18px",
            textTransform: 'none',
            position: "absolute",
        }}>
            {nickname}
        </Button>
    </div>;
};

export default MainGameScreen;
