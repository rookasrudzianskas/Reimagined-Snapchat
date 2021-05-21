import React, {useEffect, useState} from 'react';
import "./styles/Chats.css";
import {Avatar} from "@material-ui/core";
import { ChatBubble, Search } from '@material-ui/icons';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import db from "../firebase";

const Chats = () => {

    const [posts, setPosts] = useState();
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
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar" />
                <div className="chats__search">
                    <Search />
                    <input type="text" placeholder="Friends"/>
                </div>

                <ChatBubble  className="chats__chatIcon" />
            </div>

            <div className="chats__posts">
                <h2>Hello</h2>
            </div>
        </div>
    );
};

export default Chats;
