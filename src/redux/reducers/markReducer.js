import {FETCH_WEATHER} from "../const";

export default function(state = [], action)
{
    console.log('reducer, ', action) ;
    switch(action.type)
    {

        case FETCH_WEATHER:
            return [action.payload.data, ...state];

    }
    return state;
}