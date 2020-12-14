import { createAction, createSlice } from '@reduxjs/toolkit';
import {INCREMENT_ASYNC} from "../../state/types/counterSaga.type";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = createAction(INCREMENT_ASYNC);

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
