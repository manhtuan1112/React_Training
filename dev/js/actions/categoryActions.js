import categoryApi from '../api/categoryApi';
import productApi from '../api/productApi';
import {browserHistory} from 'react-router';
import * as types from './actionTypes';
export function loadCategories() {  
  return function(dispatch) {
    return categoryApi.getAllCategories().then(cates => {
      dispatch(loadCatesSuccess(cates));
    }).catch(error => {
      throw(error);
    });
  };
}

export function selectCate(cateId) {
  return function (dispatch) {
       return productApi.getAllProductsByCategory(cateId).then(products => {
      dispatch(loadProductsSuccess(products));
      browserHistory.push(`/`);
      }).catch(error => {
        throw(error);
      });
  };
  // return {
  //   type: SELECT_Cate,
  //   payload: CateId
  // }
}

export function loadProductsSuccess(products) {
  return {type: types.LOAD_PRODUCTS_SUCCESS, products};
}

export function loadCatesSuccess(cates) {
  return {type: types.LOAD_CATES_SUCCESS, cates};
}