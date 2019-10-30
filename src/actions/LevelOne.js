// @flow

export const SET_LIST_DATA = 'Lv1/SET_LIST_DATA';
export const CLEAR_LIST_DATA = 'Lv1/CLEAR_LIST_DATA';
export const SET_INPUT_VALUE = 'Lv1/SET_INPUT_VALUE';


export function setInputValue(data) {
  console.log('setInputValue', data);
  return {
    type: SET_INPUT_VALUE,
    data,
  };
}


export function setListData(data) {
  return {
    type: SET_LIST_DATA,
    data,
  };
}

export function clearListData() {
  return {
    type: CLEAR_LIST_DATA,
  };
}
