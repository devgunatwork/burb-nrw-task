import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, LOADING, SUCCEEDED } from '../../constants/apiState.constants';

export const initialState = {
  details: {},
  status: IDLE,
  error: '',
};

export const episodeSlice = createSlice({
  name: 'episode',
  initialState,
  reducers: {
    requested: (state) => {
      state.status = LOADING;
    },
    succeeded: (state, action) => {
      state.status = SUCCEEDED;
      state.details = action.payload.episode;
    },
    failed: (state, action) => {
      state.status = FAILED;
      state.error = action.error;
    },
  },
});

export const { requested, succeeded, failed } = episodeSlice.actions;

export default episodeSlice.reducer;
