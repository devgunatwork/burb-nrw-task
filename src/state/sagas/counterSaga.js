import { delay, put, takeEvery } from 'redux-saga/effects';
import { incrementByAmount } from '../../features/counter/counterSlice';
import {INCREMENT_ASYNC} from "../types/counterSaga.type";

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export function* incrementAsync({ payload }) {
  yield delay(1000);
  yield put(incrementByAmount(payload));
}
