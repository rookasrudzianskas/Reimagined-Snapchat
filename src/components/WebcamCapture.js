import React, {useRef} from 'react';
import Webcam from "react-webcam";

const videoConstrains = {
    width: 250,
    height: 400,
    facingMode: "user",
};

const WebcamCapture = () => {
    // pointing to the camera
    const webcamRef = useRef(null)
    return (
        <div className="webcamCapture">
            <Webcam audio={false} height={videoConstrains.height} ref={webcamRef} width={videoConstrains.width} videoConstraints={videoConstrains} />
        </div>
    );
};

export default WebcamCapture;
