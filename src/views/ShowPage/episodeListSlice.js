import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, LOADING, SUCCEEDED } from '../../constants/apiState.constants';

export const initialState = {
  list: [],
  status: IDLE,
  error: '',
};

export const episodeListSlice = createSlice({
  name: 'episodeList',
  initialState,
  reducers: {
    requested: (state) => {
      state.status = LOADING;
    },
    succeeded: (state, action) => {
      state.status = SUCCEEDED;
      state.list = action.payload.episodeList;
    },
    failed: (state, action) => {
      state.status = FAILED;
      state.error = action.error;
    },
  },
});

export const { requested, succeeded, failed } = episodeListSlice.actions;

export default episodeListSlice.reducer;
