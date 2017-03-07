import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {browserHistory} from 'react-router';
export default function errorReducer(state = initialState.errorObject, action) {  
  switch(action.type) {
    case types.LOGIN_WEBSITE_FAILED:
      return action.errorObject;
    case types.CLEAR_ERROR:
      return action.refreshError;
    default: 
      return state;
  }
}