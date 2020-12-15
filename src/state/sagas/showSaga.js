import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_SHOW_URL } from '../../constants/apiNames.constants';
import client from '../../api/client';
import {
  SHOW_FETCH_FAILED,
  SHOW_FETCH_REQUESTED,
  SHOW_FETCH_SUCCEEDED,
} from '../types/showSaga.type';

function* fetchShow(action) {
  try {
    const URL = `${GET_SHOW_URL}/${action.payload.showId}`;
    const show = yield call(client.get, URL);
    yield put({ type: SHOW_FETCH_SUCCEEDED, payload: { show } });
  } catch (e) {
    yield put({ type: SHOW_FETCH_FAILED, error: e.message });
  }
}

function* watchShowSaga() {
  yield takeEvery(SHOW_FETCH_REQUESTED, fetchShow);
}

export default watchShowSaga;
