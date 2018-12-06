import {FETCH_WEATHER_FAILED, FETCH_WEATHER_SUCCEED} from "../const";

export default function(state = [], action)
{
    console.log('reducer, ', action) ;
    switch(action.type)
    {
        case FETCH_WEATHER_SUCCEED:
        return [action.payload, ...state];
        case FETCH_WEATHER_FAILED:
            return [action.payload, ...'errorMessage'];
        default:
            return state;
    }
}
