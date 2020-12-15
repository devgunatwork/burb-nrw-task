import { all } from 'redux-saga/effects';
import watchShowSaga from './showSaga';

export default function* rootSaga() {
  yield all([watchShowSaga()]);
}
