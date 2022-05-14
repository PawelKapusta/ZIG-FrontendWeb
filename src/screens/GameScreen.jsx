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

  useEffect(() => {
    if (nickname === null){
      handleDialogOpen();
    }
  }, [])

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
     <p>Nickname: {nick}</p>
     <Dialog open={open} onClose={handleDialogClose}>
       <DialogTitle>Set your nickname</DialogTitle>
       <DialogContent>
         <DialogContentText>
          Please set your game nickname
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
         <Button onClick={handleDialogClose}>Cancel</Button>
         <Button onClick={handleDialogClose}>Save</Button>
       </DialogActions>
     </Dialog>
   </div>
  );
};

export default GameScreen;
