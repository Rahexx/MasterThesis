import { createSlice } from '@reduxjs/toolkit';

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    listImages: [],
  },
  reducers: {
    clearImagesList: (state, action) => {
      return [];
    },
    updateImagesList: (state, action) => {
      state.listImages = action.payload;
    },
  },
});

export const { updateImagesList, clearImagesList } = imagesSlice.actions;

export default imagesSlice.reducer;
