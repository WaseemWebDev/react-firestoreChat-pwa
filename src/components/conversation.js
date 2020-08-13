import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import database from "../firebase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 300,
    margin: "auto",
  },
  box: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "white",
  },
  inline: {
    display: "inline",
  },
}));

export default function Conversation() {
  const [messages, setMessages] = useState([]);
  let [input,setInput] = useState("");
     const [loading, setLoading] = useState(true);
     const [margin] = useState("");
  const { id, name , rname} = useParams();
  const myRef = useRef(null)
 
  
  const scrollToRef = () => myRef.current.scrollIntoView();

  
  useEffect(() => {
    
    async function getMessages() {
     
      await database
        .collection("chatroom").doc(id)
        .collection("chat").orderBy("timestamp","asc")
        .onSnapshot((querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data())
            const { text, user } = doc.data();
            list.push({
              id: doc.id,
              text,
              user,
            });
          });
          setMessages(list);
          setLoading(false);
          scrollToRef()
        });
    }
    getMessages();

  }, [id,name,rname]);

  function addChat() {
    if(input === ""){
      alert("please type a message")
    }
    
    else{ 
      
      database.collection("chatroom").doc(id).collection("chat").add({
        text: input,
        user:name === null? "unknown" : name,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
        setInput("")

    }
   
  }
  
  const classes = useStyles();
    if(loading === true){
      return  <center><img src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" alt="loader" width="240"  height="180" /></center>

    }
    
  return (
    <div className={classes.root}>
      <br />

      <Grid container justify="center">
        <Grid item xl={3} xs={11} sm={8}>
          <Box className={classes.box} boxShadow={2}>
            <center>
            
              <Typography component="h4" variant="h5" color="textPrimary">
                ChatRoom : {rname}
              </Typography>
              <Divider variant="inset" />
            </center>
            <br /><div  style={{height:"400px",overflowY:"auto"}}  >
            {messages.map((message, index) => {
              return (
                <div key={message.id} >
                  <h3 style={{fontWeight:"50px",display:"inline",marginRight:"10px"}}>{message.user}</h3> 
                  <div
                    style={{
                      background: message.user === name ?  "#2979FF" : "green",
                      display: "inline-block",
                      borderRadius: "8px",
                      color: "white",
                      width: "180px",
                      
                      padding: "12px",
                      marginRight:message.user === name ?  "60px" : "null"
                    }}
                  >
                    {message.text}
                  </div>
                  
                  <br/><br/><br/>
                  
                </div>
              );
            })}
            <span ref={myRef} style={{margin:margin}}></span> 
            </div>
            
            <br />
            <Divider variant="inset" />
            
            <TextField required  onChange={(e)=> setInput(e.target.value)} value={input} label="Enter Message"  />
            {/* <input type="text" onChange={(e)=> setInput(e.target.value)} value={input} /> */}
            <SendIcon  onClick={()=>{
             addChat()
             scrollToRef() 
            }} style={{color:"blue",fontSize:"34px",marginTop:"17px",marginLeft:"17px"}}/>
           
         
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
