import React, {useEffect, useState} from 'react';
import "./styles/Preview.css";
import {useDispatch, useSelector} from "react-redux";
import {selectCameraImage} from "../features/cameraSlice";
import { useHistory } from "react-router-dom"
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
    return (
        <div className="preview">
            <img src={cameraImage} alt=""/>
        </div>
    );
};

export default Preview;
