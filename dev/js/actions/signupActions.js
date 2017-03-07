import userApi from '../api/userApi';
import {browserHistory} from 'react-router';
import axios from 'axios';
import * as types from './actionTypes';

export function userSignupRequest(userData){
    return dispatch=>{
        return axios.post('http://localhost:5000/api/account/create',userData)
        .then(function(response){
          browserHistory.push(`login`)
        })
        .catch(error => {
        throw(error);
         });
    }
}



export function loginToWebsite(account) {
  return function (dispatch) {
      var username=account.username;
      var errorObject=[];
       return userApi.checkAccount(account).then(response => {
           if(response.status!=200){
        
            errorObject.push({key:'loginError',value:'Invalid Account!'});
             dispatch(loginToWebsiteFailed(errorObject));
           }
           else{
             if(errorObject.length>0){
                errorObject=[];
                dispatch(clearError(errorObject));
             }
             dispatch(loginToWebsiteSuccess(response.data));
           }
          return response;
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function logOut(account) {  
  return {type: types.LOGOUT_SUCCESS, account}
}


export function loginToWebsiteFailed(errorObject) {  
  return {type: types.LOGIN_WEBSITE_FAILED, errorObject}
}

export function loginToWebsiteSuccess(account) {  
  return {type: types.LOGIN_WEBSITE_SUCCESS, account}
}

export function clearError(errorObject) {  
  return {type: types.CLEAR_ERROR, errorObject}
}