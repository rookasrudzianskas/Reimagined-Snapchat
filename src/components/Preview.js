import React, {useEffect, useState} from 'react';
import "./styles/Preview.css";
import {useDispatch, useSelector} from "react-redux";
import {resetCameraImage, selectCameraImage} from "../features/cameraSlice";
import { useHistory } from "react-router-dom";
import { Close, AttachFile, Create, Crop, MusicNote, Note, Timer, TextFields, Send } from '@material-ui/icons';
import { v4 as uuid} from "uuid";
import firebase from "firebase";
import {storage} from "../firebase";
import db from "../firebase";
import {selectUser} from "../features/appSlice";

const Preview = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    // will pull camera image from data layer
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();

    useEffect(() => {
        if(!cameraImage) {
            // will replace the page to camera page
            history.replace("/");
            // works, redirects if there is no image, dependent to the camera image and history, variables from outside
        }
    }, [cameraImage, history]);

    const closePreview = () => {
        // resets the camera in the reducer, to null
        dispatch(resetCameraImage());
        // and replaces it straight to the camera home page
        history.replace("/");
    };

    const sendPost = () => {
        const id = uuid();
        // importing images to the firebase storage
        // finds the url with ref, and puts under te post, under the id, in beautifully formatted
        // here it uploads to the firebase storage
        const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, 'data_url');

        // then it uploads, the state is changed
        // it uploads all the info to the firestore database
        uploadTask.on('state_changed', null, (error => alert(error)), () => {
            // on complete function, then upload completes this one fires on
            // it gets image download url, and also puts all other things in here
           storage.ref('posts').child(id).getDownloadURL().then((url) => {
               db.collection('posts').add({
                   imageUrl: url,
                   username: user.username,
                   read: false,
                   profilePic: user.profilePic,
                   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
               });
               // after all pushes to the chats
               history.replace("/chats");
           });
        });
    };

    return (
        <div className="preview">
            <Close className="preview__close" onClick={closePreview}/>
            <div className="preview__toolbarRight">
                <TextFields />
                <Create />
                <Note />
                <MusicNote />
                <AttachFile />
                <Crop />
                <Timer />
            </div>
            <img src={cameraImage} alt=""/>
            <div onClick={sendPost} className="preview__footer">
                <h2>Send Now</h2>
                <Send className="preview__sendIcon" />
            </div>
        </div>
    );
};

export default Preview;
