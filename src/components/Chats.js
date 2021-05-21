import React from 'react';
import "./styles/Chats.css";
import {Avatar} from "@material-ui/core";
import { ChatBubble, Search } from '@material-ui/icons';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const Chats = () => {
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
        </div>
    );
};

export default Chats;
