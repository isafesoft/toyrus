import axios from 'axios';
import {ROOT_URL, FETCH_WEATHER_SUCCEED, FETCH_WEATHER_FAILED} from "../const";

function fetchWeatherSucceed(data) {
    console.log('action, ', data)
    const action = {type: FETCH_WEATHER_SUCCEED, payload: data};
    return action;
}
function fetchWeatherFailed(error) {
    const action = {type: FETCH_WEATHER_FAILED, payload: error};
    return action;
}
//export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    //const request = axios.get(url);


    // request.then(data => console.log(data))
    //     .catch(err => console.log(err));
    const promise = axios({
        url: url,
        method: 'get'
    });
    // return {
    //     type: FETCH_WEATHER,
    //     payload: request
    // }
    return (dispatch) => {
         promise
        .then( res => {dispatch(fetchWeatherSucceed(res.data))})
             .catch(err => {
                 dispatch(fetchWeatherFailed(err))
             })
    }
}
