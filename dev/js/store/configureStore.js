import {createStore, applyMiddleware} from 'redux';  
import rootReducer from '../reducers/rootReducer';  
import thunk from 'redux-thunk';
import {loadState,saveState} from './localStorage.js';


export default function configureStore() {  
  const persistedState=loadState();
  
  return createStore(
    rootReducer,persistedState,
    applyMiddleware(thunk)
  );
}

