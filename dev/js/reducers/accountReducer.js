import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {browserHistory} from 'react-router';
export default function accountReducer(state = initialState.account, action) {  
  switch(action.type) {
    case types.LOGIN_WEBSITE_SUCCESS:
    browserHistory.push(`/`)
      return action.account;
    case types.LOGOUT_SUCCESS:
    browserHistory.push(`/`)
      return action.account;
    default: 
      return state;
  }
}