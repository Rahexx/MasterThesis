import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../slice/projectSlice';

export default configureStore({
  reducer: {
    projects: projectSlice,
  },
});
