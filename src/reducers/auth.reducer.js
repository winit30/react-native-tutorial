import { combineReducers } from 'redux';

const storeAuthData = (state = {}, action) => {};

const createUser = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER_LOADING':
      return {
        isLoading: true,
        token: null,
        isError: false,
        isSuccess: false,
        errors: null,
        isLoggedIn: false,
      };

    case 'CREATE_USER_SUCCESS':
      return {
        isLoading: false,
        token: action.token,
        isError: false,
        isSuccess: true,
        errors: null,
        isLoggedIn: true,
      };

    case 'CREATE_USER_FAIL':
      return {
        isLoading: false,
        token: null,
        isError: true,
        isSuccess: false,
        errors: action.payload,
        isLoggedIn: false,
      };

    case 'USER_LOGGED_OUT_SUCCESS':
      return {
        isLoading: false,
        token: null,
        isError: false,
        isSuccess: false,
        errors: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

const loginUser = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER_LOADING':
      return {
        isLoading: true,
        token: null,
        isError: false,
        isSuccess: false,
        errors: null,
        isLoggedIn: false,
      };

    case 'LOGIN_USER_SUCCESS':
      return {
        isLoading: false,
        token: action.token,
        isError: false,
        isSuccess: true,
        errors: null,
        isLoggedIn: true,
      };

    case 'LOGIN_USER_FAIL':
      return {
        isLoading: false,
        token: null,
        isError: true,
        isSuccess: false,
        errors: action.payload,
        isLoggedIn: false,
      };

    case 'USER_LOGGED_OUT_SUCCESS':
      return {
        isLoading: false,
        token: null,
        isError: false,
        isSuccess: false,
        errors: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default combineReducers({
  createUser,
});
