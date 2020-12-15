import { all } from 'redux-saga/effects';
import watchShowSaga from './showSaga';
import watchEpisodeSaga from './episodeSaga';
import watchEpisodeListSaga from './episodeListSaga';

export default function* rootSaga() {
  yield all([watchShowSaga(), watchEpisodeSaga(), watchEpisodeListSaga()]);
}
