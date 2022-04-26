import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projectsList: [],
    activeProject: '',
  },
  reducers: {
    updateProjectsList: (state, action) => {
      state.projectsList = action.payload;
    },
    updateActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },
  },
});

export const { updateProjectsList, updateActiveProject } = projectSlice.actions;

export default projectSlice.reducer;
