import {
  INITIAL_LOADING,
  SET_HOME_MENU,
  SET_TOTAL_TYPE_COUNT,
  SET_TYPE_DATA,
} from '../actions';

const initialState = {
  initialLoading: false,
  menu: [],
  totalCount: 0,
  typeData: [],
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
    case SET_TOTAL_TYPE_COUNT:
      return {
        ...state,
        totalCount: data,
      }
    case SET_TYPE_DATA:
      return {
        ...state,
        typeData: data
      }
    default:
      return state;
  }
}

export default initReducer;