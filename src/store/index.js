import {   createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { enhancedStore } from './middleware/core';

let reduxStore;

export default function getStore() {
  if(!reduxStore) {
		reduxStore = createStore(rootReducer, enhancedStore);
  }
  return reduxStore;
}



export const store = getStore();