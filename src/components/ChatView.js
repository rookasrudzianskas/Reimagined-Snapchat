import React, {useEffect} from 'react';
import "./styles/ChatView.css";
import {useSelector} from "react-redux";
import {selectSelectedImage} from "../features/appSlice";
import {useHistory} from "react-router-dom";

const ChatView = () => {

    const selectedImage = useSelector(selectSelectedImage)
    const history = useHistory();

    useEffect(() => {
        if(!selectedImage) {
            exit();
        }
    }, []);

    const exit = () => {
        history.replace('/chats');
    }

    return (
        <div className="chatView">
            <img src={selectedImage} onClick={exit} alt=""/>
        </div>
    );
};

export default ChatView;
