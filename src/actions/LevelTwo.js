// @flow
import {
  loadingHide,
} from './Load';
export const SET_LIST_DATA = 'Lv2/SET_LIST_DATA';
export const GET_WEATHER = 'Lv2/GET_WEATHER';
export const GET_AIRPORT_INFO = 'Lv2/GET_AIRPORT_INFO';

export function setListData(data) {
return {
  type: SET_LIST_DATA,
  data,
};
}

// helper

// fetch('api url')
// .then(response => {
//   if(response.ok){
//       return response.clone().json();
//   }
// })
// .then(data => {
//   console.log('data', data);
// })
// .catch(err => {
//   console.log('err', err);
// })

export function getWeather() {
  return (dispatch) => {
      fetch('http://api.openweathermap.org/data/2.5/weather?id=1668341&appid=a1fc2c19d548237a56e0edd7b79b3ebc&units=metric&lang=zh_tw')
        .then(response => {
          if(response.ok){
              return response.clone().json();
          }
        })
        .then(data => {
          dispatch(loadingHide());
          dispatch(getWeatherSuccess(data));
        })
        .catch(err => {
          console.log('err', err);
        })
    }
}

export function getWeatherSuccess(data) {
  return { type: GET_WEATHER, data};
}

export function getAirportInfo() {
  return (dispatch) => {
      fetch('https://aviation-edge.com/v2/public/flights?key=b39629-194ac0&arrIata=TPE&status=landed')
        .then(response => {
          if(response.ok){
              return response.clone().json();
          }
        })
        .then(data => {
          dispatch(loadingHide());
          dispatch(getAirportInfoSuccess(data));
        })
        .catch(err => {
          console.log('err', err);
        })
    }
}

export function getAirportInfoSuccess(data) {
  return { type: GET_AIRPORT_INFO, data};
}

// Departure
// https://aviation-edge.com/v2/public/flights?key=b39629-194ac0&depIata=TPE&status=started

// Arrive
// https://aviation-edge.com/v2/public/flights?key=b39629-194ac0&arrIata=TPE&status=landed

// TSA
// HND
// BKK
// DXB
// JFK
// ICN
// PVG