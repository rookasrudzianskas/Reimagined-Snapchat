import { configureStore } from '@reduxjs/toolkit';
import appReducer from "../features/appSlice";
import cameraReducer from "../features/cameraSlice";

// registering reducers
export const store = configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReducer,
  },
});
