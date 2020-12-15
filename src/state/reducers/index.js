import { combineReducers } from '@reduxjs/toolkit';
import showReducer from '../../views/ShowPage/showSlice';
import episodeListReducer from '../../views/ShowPage/episodeListSlice';

export default combineReducers({
  show: showReducer,
  episodeList: episodeListReducer,
});
