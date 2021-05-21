import React, {useState} from 'react';
import "./styles/Preview.css";
import {useDispatch, useSelector} from "react-redux";
import {selectCameraImage} from "../features/cameraSlice";

const Preview = () => {

    const dispatch = useDispatch()
    // will pull camera image from data layer
    const cameraImage = useSelector(selectCameraImage)
    return (
        <div className="preview">
            <img src={cameraImage} alt=""/>
        </div>
    );
};

export default Preview;
