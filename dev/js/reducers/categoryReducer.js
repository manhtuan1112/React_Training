import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function categoryReducer(state = initialState.cates, action) {  
  switch(action.type) {
    case types.LOAD_CATES_SUCCESS:
      return action.cates
    default: 
      return state;
  }
}