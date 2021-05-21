import React, {useEffect, useState} from 'react';
import "./styles/Preview.css";
import {useDispatch, useSelector} from "react-redux";
import {resetCameraImage, selectCameraImage} from "../features/cameraSlice";
import { useHistory } from "react-router-dom";
import { Close, AttachFile, Create, Crop, MusicNote, Note, Timer, TextFields, Send } from '@material-ui/icons';

const Preview = () => {

    const dispatch = useDispatch();
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
        </div>
    );
};

export default Preview;
