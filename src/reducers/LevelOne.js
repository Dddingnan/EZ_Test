// @flow

import {
  SET_LIST_DATA,
  CLEAR_LIST_DATA,
  SET_INPUT_VALUE,
} from '../actions/LevelOne';

export default (state = {
  listDate: [],
  inputValue: '',
}, action) => {
  switch (action.type) {
    case SET_LIST_DATA:
        return {
            ...state,
            listDate: [
              action.data,
              ...state.listDate,
            ],
        };
    case CLEAR_LIST_DATA:
        return {
          ...state,
          listDate: [],
          inputValue: '',
        };

    case SET_INPUT_VALUE:
        return {
          ...state,
          inputValue: action.data,
        };

    default:
      return state;
  }
};
