import commentApi from '../api/commentApi';
import {browserHistory} from 'react-router';
import axios from 'axios';
import * as types from './actionTypes';

export function getAllCommentsByProduct(productId) {
  return function (dispatch) {
       return commentApi.getAllCommentsByProduct(productId).then(comments => {
      dispatch(loadCommentsSuccess(comments));
    //   browserHistory.push("/");
      }).catch(error => {
        throw(error);
      });
  };
}

export function createComment(comment) {
  return function (dispatch) {
       return commentApi.createComment(comment).then(response => {
          dispatch(getAllCommentsByProduct(response.productID));
          return response;
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function loadCommentsSuccess(comments) {
  return {type: types.LOAD_COMMENTS_SUCCESS, comments};
}

export function createCommentSuccess(comment) {  
  return {type: types.CREATE_COMMENT_SUCCESS, comment}
}
