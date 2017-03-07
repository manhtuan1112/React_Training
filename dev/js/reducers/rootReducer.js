import {combineReducers} from 'redux';  
import cates from './categoryReducer';
import products from './productReducer';
import comments from './commentReducer';
import errorObject from './errorReducer';
import account from './accountReducer';
import carts from './cartReducer';
const rootReducer = combineReducers({  
  // short hand property names
  cates,products,comments,errorObject,account,carts
})

export default rootReducer;  