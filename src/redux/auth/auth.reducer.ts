import { handleActions } from 'redux-actions';
import { IAuth } from '../../types/auth';
import { AuthActions } from './auth.actions';

const initialState = null;

export const AuthReducer = handleActions<IAuth | null>(
  {
    [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
  },
  initialState,
);
