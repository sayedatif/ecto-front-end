import {
  INITIAL_LOADING,
  SET_HOME_MENU,
  SET_TOTAL_TYPE_COUNT,
  SET_TYPE_DATA,
  SET_LIST_LOADING,
  SET_SELECTED_PAGE,
  SET_SEARCH_TEXT,
  SET_SORT_ORDER,
  SET_SORT_KEY,
} from '../actions';

const initialState = {
  initialLoading: false,
  menu: [],
  totalCount: 0,
  typeData: [],
  showListLoading: false,
  selectedPage: 1,
  searchText: '',
  sortOrder: 'asc',
  sortKey: '',
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
    case SET_LIST_LOADING:
      return {
        ...state,
        showListLoading: data,
      }
    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage: data,
      }
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: data,
      }
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: data,
      }
    case SET_SORT_KEY:
      return {
        ...state,
        sortKey: data,
      }
    default:
      return state;
  }
}

export default initReducer;