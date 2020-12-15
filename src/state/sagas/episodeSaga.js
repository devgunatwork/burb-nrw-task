import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_EPISODE_URL } from '../../constants/apiNames.constants';
import client from '../../api/client';
import {
  EPISODE_FETCH_FAILED,
  EPISODE_FETCH_REQUESTED,
  EPISODE_FETCH_SUCCEEDED,
} from '../types/episodeSaga.type';

function* fetchEpisode(action) {
  try {
    const URL = `${GET_EPISODE_URL}/${action.payload.episodeId}`;
    const episode = yield call(client.get, URL);
    yield put({ type: EPISODE_FETCH_SUCCEEDED, payload: { episode } });
  } catch (e) {
    yield put({ type: EPISODE_FETCH_FAILED, error: e.message });
  }
}

function* watchEpisodeSaga() {
  yield takeEvery(EPISODE_FETCH_REQUESTED, fetchEpisode);
}

export default watchEpisodeSaga;
