import productApi from '../api/productApi';
import * as types from './actionTypes';
import {browserHistory} from 'react-router';
// export function loadProductsByCategory() {  
//   return function(dispatch) {
//     return productApi.getAllProductsByCategory(1).then(products => {
//       dispatch(loadProductsSucess(products));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

export function loadAllProducts(){
  return function(dispatch){
    return productApi.getAllProducts().then(products=>{
      dispatch(loadProductsSucess(products));
      //  browserHistory.push("/");
    }).catch(error=>{
      throw(error);
    });
  }
}

export function loadAllProductsWithRoute(){
  return function(dispatch){
    return productApi.getAllProducts().then(products=>{
      dispatch(loadProductsSucess(products));
       browserHistory.push(`/`);
    }).catch(error=>{
      throw(error);
    });
  }
}

export function fetchProductsByCate(cateId) {
  return function (dispatch) {
       return productApi.getAllProductsByCategory(cateId).then(products=>{
      dispatch(loadProductsSucess(products));
      }).catch(error=>{
        throw(error);
      });
  }
}


export function updateProduct(product) {
  return function (dispatch) {
       return productApi.updateProduct(product).then(products=>{
      dispatch(loadProductsSucess(products));
      }).catch(error=>{
        throw(error);
      });
  }
}



export function loadProductsSucess(products) {
  return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}