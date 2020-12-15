import { combineReducers } from '@reduxjs/toolkit';
import showReducer from '../../views/ShowPage/showSlice';
import episodeListReducer from '../../views/ShowPage/episodeListSlice';
import episodeReducer from '../../views/EpisodePage/episodeSlice';

export default combineReducers({
  show: showReducer,
  episodeList: episodeListReducer,
  episode: episodeReducer,
});
