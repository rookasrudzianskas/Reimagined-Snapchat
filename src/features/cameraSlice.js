import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
    // the initial state is nothing, there is no image
    name: 'camera',
    initialState: {
        cameraImage: null,
    },
    reducers: {
        // two reducer cases, one to set the image, to the dispatched action payload
        setCameraImage: (state, action) => {
            state.cameraImage = action.payload;
        },
        // and another one, to fully reset the image
        resetCameraImage: (state) =>{
            state.cameraImage = null
        }
    },
});

// exporting stuff
export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectCameraImage = state => state.camera.cameraImage;

export default cameraSlice.reducer;
