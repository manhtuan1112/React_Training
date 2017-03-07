import * as types from '../actions/actionTypes';  
import initialState from './initialState';
import {browserHistory} from 'react-router';
export default function cartReducer(state = initialState.carts, action) {  
  switch(action.type) {
    case types.LOAD_CARTS_SUCCESS:
      return action.carts
    case types.ADD_CART_SUCCESS:
      var isExist=false;
      state.map((cart, index) => {
          if (cart.productId==action.product.id) {
            cart.quantity+=1;
            isExist=true;
          }
        })
        if(!isExist){
          state.push({productId:action.product.id,product:action.product,quantity:1})
        }
        alert("Add "+action.product.name+" successfully!");
        return state;
    case types.UPDATE_CART_SUCCESS:
      state.map((cart, index) => {
        if (cart.productId==action.updatedCart.productId) {
          cart.quantity=action.updatedCart.quantity   
        }
      })
      // if(newState[0].productId==action.updatedCart.productId)
      //   newState[0].quantity=action.updatedCart.quantity
      browserHistory.push(`/shoppingcart`)
      return state;
    case types.REMOVE_CART_SUCCESS:
      return state.filter(cart => cart.productId !== action.productId);
    case types.CLEAR_CART_SUCCESS:
      var r = confirm("Are you sure to clear all!");
        if (r == true) {
           return initialState.carts;
        } else {
           return state;
        }
    case types.RESET_CART_SUCCESS:
      return initialState.carts;
    default: 
      return state;
  }
}