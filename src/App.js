import React, {useEffect} from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/appSlice";
import Login from "./components/Login";
import {auth} from "./firebase";

function App() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            // for any point, the authentication state changes, fire it
            if(authUser) {
                dispatch(login({
                    // we do the same as on login ,dispatch an anction to the data layer
                    username: authUser.displayName,
                    profilePic: authUser.photoURL,
                    id: authUser.uid,
                }))
            } else {
                dispatch(logout());
            }
        })
    }, []);

  return (
    <div className="app">
        <Router>
            {!user ? (
                <Login />
            ): (
                <>
                <img className="app__logo" src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt=""/>
            <div className="app__body">
                <div className="app__bodyBackground">
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
            </div>
                </>
            )}
        </Router>
    </div>
  );
}

export default App;
