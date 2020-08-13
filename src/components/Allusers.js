import React from "react";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../App.css";
import { Link } from "react-router-dom";

export default function AllUsers({ user, userId,userName,name }) {
let checkLoginUserName =  userName === user.room;

  return (
    <List>
     {checkLoginUserName ? null : (
       <>
      <ListItem alignItems="flex-start" className="users-list">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
       
        <ListItemText
          primary="Chatroom"
          secondary={
            
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {user.room}
              </Typography>
            </React.Fragment>
          }
        />
       
          <Button
          component={Link}
          to={`/conversation/${userId}/${userName}/${name}`}
            size="small"
            variant="contained"
            color="primary"
          >
            Chat
          </Button>
     
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
     )}
     
    </List>
  );
}
