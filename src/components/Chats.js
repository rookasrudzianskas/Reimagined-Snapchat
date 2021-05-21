import React, {useEffect, useState} from 'react';
import "./styles/Chats.css";
import {Avatar} from "@material-ui/core";
import { ChatBubble, Search} from '@material-ui/icons';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import db, {auth} from "../firebase";
import Chat from "./Chat";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../features/appSlice";
import { useHistory } from "react-router-dom";
import {resetCameraImage} from "../features/cameraSlice";

const Chats = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();
    const [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() => {
        // then db changes, it automatically updates the post
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        });
    }, []);

    const takeSnap = () => {
        dispatch(resetCameraImage());
        history.push("/");
    };

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic} onClick={() => auth.signOut()} className="chats__avatar" />
                <div className="chats__search">
                    <Search className="chats__searchIcon" />
                    <input type="text" placeholder="Friends"/>
                </div>

                <ChatBubble  className="chats__chatIcon" />
            </div>

            <div className="chats__posts">
                {posts.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
                    <Chat
                        key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}
                    />
                ))}
            </div>
            <RadioButtonUncheckedIcon className="chats__takePicIcon" fontSize={"large"}  onClick={takeSnap}/>
        </div>
    );
};

export default Chats;
