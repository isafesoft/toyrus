import axios from 'axios';
import {ROOT_URL, API_KEY, FETCH_WEATHER} from "../const";

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    request.then(data => console.log(data)).catch(err => console.log(err))

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}