import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    selectedImage: null,
  },
  reducers: {
    // login, to dispatch the login info
    login: (state, action) => {
      state.user = action.payload;
    },
  // logout
    logout: (state) => {
      state.user = null
    },

    // selectImage, to tap on the image we are hovering on, to showw the preview
    selectImage: (state, action) => {
      state.selectedImage = action.payload;
    },

    resetImage: (state, action) => {
      state.selectedImage = null;
    },
  },
});

export const { login, logout, selectImage, resetImage } = appSlice.actions;

export const selectSelectedImage = state => state.app.selectedImage;
export const selectUser = state => state.app.user;


export default appSlice.reducer;
