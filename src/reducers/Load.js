// @flow

import {
    LOADING_SHOW,
    LOADING_HIDE,
  } from '../actions/Load';
  
  export default (state = {
    loding: false,
  }, action) => {
    switch (action.type) {
      case LOADING_SHOW:
        return {
            loding: true,
        };
        case LOADING_HIDE:
        return {
            loding: false,
        };
      default:
        return state;
    }
  };
  