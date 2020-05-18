import checkPropTypes from 'check-prop-types';
import { createStore, aplyMiddleWare } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @param {object} initialState - Initial state for store. 
 * @returns {Store} - Redux Store
 */
export const storeFactory = (initialState) => {
  const creatStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return creatStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {*} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
 const propError = checkPropTypes(
   component.propTypes, 
   conformingProps,
   'prop',
   component.name);
  expect(propError).toBeUndefined();
}