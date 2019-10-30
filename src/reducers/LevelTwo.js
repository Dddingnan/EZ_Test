// @flow

import {
  SET_LIST_DATA,
  GET_WEATHER,
  GET_AIRPORT_INFO,
} from '../actions/LevelTwo';

export default (state = {
  listDate: [
    { Trunp: '咖注意欸' , Xie: '麥阿捏 尬ㄍㄧˇ郎'},
  ],
}, action) => {
  switch (action.type) {
    case SET_LIST_DATA:
        return {
            ...state,
            listDate: [
              ...state.listDate,
              {
                Trunp: action.data, Xie: 'Yes Sir',
              },
            ],
        };
    case GET_WEATHER:
        return {
          ...state,
          listDate: [
            ...state.listDate,
            {
              Trunp: '台北天氣如何?', 
              Xie: `現在溫度：${action.data.main.temp}
              最高溫：${action.data.main.temp_max}
              最低溫：${action.data.main.temp_min}
              空氣濕度：${action.data.main.humidity}%
              壓力：${action.data.main.pressure}hpa
              `,
            },
          ],
      };
    case GET_AIRPORT_INFO:
        return {
          ...state,
          listDate: [
            ...state.listDate,
            {
              Trunp: '台灣機場資訊?', 
              Xie: `目前有${action.data.length}架飛機剛抵達台灣`,
            },
          ],
      };
    default:
      return state;
  }
};
