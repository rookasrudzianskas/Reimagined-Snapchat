import React from 'react';
import "./styles/Chat.css";
import {Avatar} from "@material-ui/core";
import {StopRounded} from "@material-ui/icons";
import ReactTimeago from  "react-timeago"
import {useDispatch} from "react-redux";
import {selectImage} from "../features/appSlice";
import db from "../firebase";
import {useHistory} from "react-router-dom";

const Chat = ({profilePic, id, username, imageUrl, timestamp, read, key}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const open = () => {
        if(!read) {
            // then I click on the image, it will go ahead, and push the image to the store, for us to be able to render it to the as the preview
            dispatch(selectImage(imageUrl));
            db.collection('posts').doc(id).set({
                read: true,
                // it updates the firebase post, but not overwrites everything, but keeps everything with merge and adds the read true as replaced
                // read false value
                // merge means to keep the previous state too
            }, {merge: true}
            );
            // push to the view component
            history.push('/chats/view');
        }
    };


    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic}/>
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
            </div>

            {!read && <StopRounded className="chat__readIcon"/>}
        </div>
    );
};

export default Chat;
