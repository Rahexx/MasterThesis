import { createSlice } from '@reduxjs/toolkit';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    listImages: [],
    activeImage: '',
  },
  reducers: {
    updateImagesList: (state, action) => {
      state.listImages = action.payload;
    },
    updateActiveImage: (state, action) => {
      state.activeImage = action.payload;
    },
  },
});

export const { updateImagesList, updateActiveImage } = imagesSlice.actions;

export default imagesSlice.reducer;
