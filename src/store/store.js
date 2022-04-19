import { configureStore } from '@reduxjs/toolkit';
import imagesSlice from '../slice/imageSlice';

export default configureStore({
  reducer: {
    images: imagesSlice,
  },
});
