import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth.reducer';
import userReducer from './user.reducer';

const reducers = {
  authReducer,
  userReducer,
  form: formReducer,
};

export default combineReducers(reducers);
