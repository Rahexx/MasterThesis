import { createSlice } from '@reduxjs/toolkit';
import { package3D } from '../util/simpleTypes';

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projectsList: [],
    activeProject: '',
    package3DList: ['plotly', 'highChart'],
    activePackage: package3D.plotly,
  },
  reducers: {
    updateActivePackage: (state, action) => {
      state.activePackage = action.payload;
    },
    updateProjectsList: (state, action) => {
      state.projectsList = action.payload;
    },
    updateActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },
  },
});

export const { updateProjectsList, updateActiveProject, updateActivePackage } =
  projectSlice.actions;

export default projectSlice.reducer;
