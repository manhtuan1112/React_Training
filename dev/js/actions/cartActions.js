import cartApi from '../api/cartApi';
import {browserHistory} from 'react-router';
import axios from 'axios';
import * as types from './actionTypes';

export function getAllCart() {
  return function (dispatch) {
       return cartApi.getAll().then(response => {
         dispatch(loadCartsSuccess(response.data));
    //   browserHistory.push("/");
      }).catch(error => {
        throw(error);
      });
  };
}

export function addToCart(product) {
  return function (dispatch) {
      dispatch(addCartSuccess(product));
  };
}

export function updateCart(productId,quantity) {
  return function (dispatch) {
      var updatedCart={productId:productId,quantity:quantity}
      dispatch(updateCartSuccess(updatedCart));
  };
}

export function removeCart(productId){
  return function(dispatch){
    dispatch(removeCartSuccess(productId));
  }
}

export function clearCart(){
  return function(dispatch){
    dispatch(clearCartSuccess());
  }
}

export function makePayment(orderModel){
  return function(dispatch){
     return cartApi.makePayment(orderModel).then(response => {
        if(response.status==200){
          dispatch(resetCartSuccess([]));
          browserHistory.push("/thankyou");
        }
      }).catch(error => {
        throw(error);
      });
  }
}




export function loadCartsSuccess(carts) {
  return {type: types.LOAD_CARTS_SUCCESS, carts};
}

export function updateCartSuccess(updatedCart) {
  return {type: types.UPDATE_CART_SUCCESS, updatedCart};
}

export function addCartSuccess(product) {
  return {type: types.ADD_CART_SUCCESS, product};
}

export function removeCartSuccess(productId) {
  return {type: types.REMOVE_CART_SUCCESS, productId};
}

export function clearCartSuccess() {
  return {type: types.CLEAR_CART_SUCCESS};
}

export function resetCartSuccess(carts) {  
  return {type: types.RESET_CART_SUCCESS, carts}
}