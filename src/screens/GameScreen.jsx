import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const GameScreen = () => {
  const nickname = localStorage.getItem("Nickname");
  const [open, setOpen] = useState(false);
  const [nick, setNick] = useState(nickname);
  console.log(nickname)
  useEffect(() => {
    if (nickname === undefined || nickname === null || nickname === ''){
      handleDialogOpen();
    }
  })

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    localStorage.setItem("Nickname",nick);
    setOpen(false);
  };

  return (
   <div className="App">
     <div>GameScreen</div>
     <p>Nick: {nick}</p>
     <Dialog open={open} onClose={handleDialogClose}>
       <DialogTitle>Ustaw swój nick</DialogTitle>
       <DialogContent>
         <DialogContentText>
          Proszę ustaw swój nick
         </DialogContentText>
         <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nickname"
          type="text"
          fullWidth
          variant="standard"
          onChange={(e) => setNick(e.target.value)}
         />
       </DialogContent>
       <DialogActions>
         <Button onClick={handleDialogClose}>Zaniechaj</Button>
         <Button onClick={handleDialogClose}>Zapisz</Button>
       </DialogActions>
     </Dialog>
   </div>
  );
};

export default GameScreen;
