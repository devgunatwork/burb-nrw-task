import { combineReducers } from '@reduxjs/toolkit';
import showReducer from '../../views/ShowPage/showSlice';

export default combineReducers({
  show: showReducer,
});
