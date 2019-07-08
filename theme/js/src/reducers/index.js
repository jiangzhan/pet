import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import content from './content';
import filters from './filters';

export default combineReducers({
  routing: routerReducer,
  content,
  filters
});
