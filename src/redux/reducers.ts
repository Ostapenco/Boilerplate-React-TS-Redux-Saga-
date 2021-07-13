import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { IAuth } from '../types/auth';
import { AuthReducer } from './auth/auth.reducer';

export interface IRootReducer {
  router: RouterState;
  auth: IAuth | null;
}
// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<IRootReducer>({
  router: routerReducer,
  auth: AuthReducer,
});

export default rootReducer;
