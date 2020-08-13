import React from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import ChatSidebar from './components/chatSidebar';
import NotFound from './components/notFound';
import Conversation from './components/conversation';
function App() {
  return (
    <div className="App">
    <br/><br/>
    <Switch>
        <Route exact path="/">
        <ChatSidebar />
        </Route>
        <Route exact path="/conversation/:id/:name/:rname">
        <Conversation />
        </Route>
        <Route exact path="*" component={NotFound} />
       
      </Switch>
   
    </div>
  );
}

export default App;
