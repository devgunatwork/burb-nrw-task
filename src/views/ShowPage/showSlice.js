import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, LOADING, SUCCEEDED } from '../../constants/apiState.constants';

export const initialState = {
  details: {},
  status: IDLE,
  error: '',
};

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    requested: (state) => {
      state.status = LOADING;
    },
    succeeded: (state, action) => {
      state.status = SUCCEEDED;
      state.details = action.payload.show;
    },
    failed: (state, action) => {
      state.status = FAILED;
      state.error = action.error;
    },
  },
});

export const { increment, decrement, incrementByAmount } = showSlice.actions;

export const selectCount = (state) => state.counter.value;

export default showSlice.reducer;
