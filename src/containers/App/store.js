import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware";
import { reducer as reduxFormReducer } from 'redux-form';
import { sidebarReducer, themeReducer, markReducer } from '../../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
    weather: markReducer
});

const store = createStore(reducer, applyMiddleware(promise(), thunk));

export default store;
