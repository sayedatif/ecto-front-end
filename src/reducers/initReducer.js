import {
  INITIAL_LOADING,
  SET_HOME_MENU
} from '../actions';

const initialState = {
  initialLoading: false,
  menu: [],
}

const initReducer = (state = initialState, { type, data }) => {
  switch(type) {
    case INITIAL_LOADING:
      return {
        ...state,
        initialLoading: data,
      }
    case SET_HOME_MENU:
      return {
        ...state,
        menu: data,
      }
    default:
      return state;
  }
}

export default initReducer;