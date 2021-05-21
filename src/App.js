import React from 'react';
import './App.css';
import WebcamCapture from "./components/WebcamCapture";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Prieview from "./components/Preview";
import Chats from "./components/Chats";
import ChatView from "./components/ChatView";

function App() {
  return (
    <div className="app">
        <Router>
            <div className="app__body">
                <Switch>

                    <Route path="/chats/view">
                        <ChatView />
                    </Route>

                    <Route path="/chats">
                        <Chats />
                    </Route>
                    <Route path="/preview">
                        <Prieview />
                    </Route>
                    <Route exact path="/">
                        <WebcamCapture />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
