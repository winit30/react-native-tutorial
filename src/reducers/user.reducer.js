import { combineReducers } from 'redux';

const getUser = (state = {}, action) => {
    switch (action.type) {

      case "GET_USER_LOADING":
          return {
            isLoading: true,
            isError: false,
            isSuccess: false,
            userDatils: null,
            errors: null
          }

      case "GET_USER_SUCCESS":
          return {
            isLoading: false,
            isError: false,
            isSuccess: true,
            userDatils: action.payload,
            errors: null
          }

      case "GET_USER_FAIL":
          return {
            isLoading: false,
            isError: true,
            isSuccess: false,
            userDatils: null,
            errors: action.payload
          }

      default:
        return state;
    }
}

export default combineReducers({
    getUser
});
