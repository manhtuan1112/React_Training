import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {browserHistory} from 'react-router';
export default function commentReducer(state = initialState.comments, action) {  
  switch(action.type) {
    case types.LOAD_COMMENTS_SUCCESS:
      return action.comments
    case types.CREATE_COMMENT_SUCCESS:
      browserHistory.push(`/productdetail/${action.comment.productID}`)
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ]
    default: 
      return state;
  }
}