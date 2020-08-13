import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import database from "../firebase";
import AllUsers from "./Allusers";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 560,
    margin: "auto",
  
  },
  box: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor:"white"
  },
  inline: {
    display: "inline",
  },
}));

export default function ChatSidebar() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [promptUserName , setpromptUserName] = useState("");
  const [addUserInput,setAddUserInput] = useState("");

  useEffect(() => {
    function setUserName(){
      let userName  = prompt("enter user name");
   if(userName !== ""){
    setpromptUserName(userName)
   }
      

      }
    
    async function chatRooms() {
     await  database.collection("chatroom").orderBy("timestamp","desc").onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          const { room } = doc.data();
          list.push({
            id: doc.id,
            room,
          });
        });
        setUsers(list);
        setLoading(false);
      });
    }
    setUserName()
    chatRooms();
  }, []);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addUser = ()=>{
        database.collection("chatroom")
           .add({
             room:addUserInput,
             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           });
           handleClose();
     }
  

  const classes = useStyles();
  if(loading === true){
    return  <center><img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" alt="loader" width="240"  height="180" /></center>
 
  }
  else if(promptUserName === ""){
   
    return <center><h2>please give user name to proceed further</h2></center>
  }
  return (
   
      <div className={classes.root} >
        <br />
         
        <Grid container justify="center">
          <Grid item xl={3} xs={11}  sm={8}  >
          <Box  className={classes.box} boxShadow={2}>
          <center>
          <Typography component="h4" variant="h5" color="textPrimary">
           ChatRoom
          </Typography>
          <Divider variant="inset" />
          <br/>
          <Typography component="h4" variant="h5" color="textPrimary">
            You are Loged In as <b style={{color:"blue"}}> {promptUserName}</b>
          </Typography>
          <Divider variant="inset" /> 

          <div>
          <br/>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Add Room
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Room</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter User name"
            type="email"
            fullWidth
            value={addUserInput}
            onChange={(e)=> setAddUserInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{
            addUser();
           
          }} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        </center>
            {users.map((user, index) => {
              return <AllUsers key={user.id}  userName={promptUserName}  userId={user.id} name={user.room} user={user} />;
            })}
            </Box>
          </Grid>
        </Grid>
      </div>
    
  );
}
