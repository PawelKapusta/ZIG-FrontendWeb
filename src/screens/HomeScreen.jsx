import React, {useState} from "react";
import styles from '../styles/HomeScreen.module.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useNavigate} from "react-router-dom";

const HomeScreen = () => {
    const navigate = useNavigate();
  const [data, setData] = useState();
  const [errorData, setErrorData] = useState();

    const onButtonClick = () => {
        navigate("/nick");
    }

    const readFileOnUpload = (uploadedFile) =>{
    const fileReader = new FileReader();
    fileReader.onloadend = ()=>{
      try{
        setData(JSON.parse(fileReader.result));
        setErrorData(null)
      }catch(e){
        setErrorData("**Not valid JSON file!**");
      }
    }
    if( uploadedFile!== undefined)
      fileReader.readAsText(uploadedFile);
  }

  return <div className={styles.screen}>
    <Button id={styles.button} className={styles.button} endIcon={<SendIcon />} onClick={onButtonClick}>Rozpocznij grę!</Button>
    <div className={styles.reader}>
      <label className={styles.headerFile}>Load the world</label>
      <input type="file" className={styles.fileReader} />
    </div>
  </div>;
};

export default HomeScreen;
