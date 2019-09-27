// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import LevelOne from './LevelOne';
import LevelTwo from './LevelTwo';
import LevelThree from './LevelThree';
import Load from './Load';

export default combineReducers({
  LevelOne,
  LevelTwo,
  LevelThree,
  Load,
  routing: routerReducer,
});
