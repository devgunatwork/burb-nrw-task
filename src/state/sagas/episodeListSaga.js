import { call, put, takeEvery } from 'redux-saga/effects';
import { EPISODE_ENDPOINT, GET_SHOW_URL } from '../../constants/apiNames.constants';
import client from '../../api/client';
import {
  EPISODE_LIST_FETCH_FAILED,
  EPISODE_LIST_FETCH_REQUESTED,
  EPISODE_LIST_FETCH_SUCCEEDED,
} from '../types/episodeListSaga.type';

function* fetchEpisodeList(action) {
  try {
    const URL = `${GET_SHOW_URL}/${action.payload.showId}/${EPISODE_ENDPOINT}`;
    const episodeList = yield call(client.get, URL);
    yield put({ type: EPISODE_LIST_FETCH_SUCCEEDED, payload: { episodeList } });
  } catch (e) {
    yield put({ type: EPISODE_LIST_FETCH_FAILED, error: e.message });
  }
}

function* watchEpisodeListSaga() {
  yield takeEvery(EPISODE_LIST_FETCH_REQUESTED, fetchEpisodeList);
}

export default watchEpisodeListSaga;
