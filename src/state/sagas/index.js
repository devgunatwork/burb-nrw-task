import { all } from 'redux-saga/effects';
import { watchIncrementAsync } from './counterSaga';

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
