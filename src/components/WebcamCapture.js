import React, {useCallback, useRef, useState} from 'react';
import Webcam from "react-webcam";
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import {useDispatch} from "react-redux";
import {setCameraImage} from "../features/cameraSlice";
import { useHistory } from "react-router-dom";
import "./styles/WecamCapture.css"
// video camera settings
const videoConstrains = {
    width: 250,
    height: 400,
    facingMode: "user",
};

const WebcamCapture = () => {
    // pointing to the camera
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const history = useHistory()
    // use callback is clever function it does the same, then is fired for the first time, and after that, then fired next times, it just
    // uses the same answer as from the first rerender
    const capture = useCallback(() => {
        // then webcamRef changes, it runs
        // this gets screenshot
        const imageSrc = webcamRef.current.getScreenshot();
        // dispatching to the data layer
        dispatch(setCameraImage(imageSrc));
        history.push("./preview")
        // console.log(imageSrc) base 64 image
        setImage(imageSrc);

    }, [webcamRef]);


    return (
        <div className="webcamCapture">
            <Webcam screenshotFormat="image/jpeg" audio={false} height={videoConstrains.height} ref={webcamRef} width={videoConstrains.width} videoConstraints={videoConstrains} />

            <RadioButtonUnchecked className="webcamCapture__button" onClick={capture} fontSize={"large"} />

        </div>
    );
};

export default WebcamCapture;
