//action types
export const INITIAL_FETCH_REQUEST = 'INITIAL_FETCH_REQUEST';
export const INITIAL_LOADING = 'INITIAL_LOADING';
export const SET_HOME_MENU = 'SET_HOME_MENU';
export const FETCH_TYPE_RELATED_DATA = 'FETCH_TYPE_RELATED_DATA';
export const SET_TOTAL_TYPE_COUNT = 'SET_TOTAL_TYPE_COUNT';
export const SET_TYPE_DATA = 'SET_TYPE_DATA';

//action creators
export const initialRequest = () => ({
  type: INITIAL_FETCH_REQUEST,
});
export const initialLoading = data => ({
  type: INITIAL_LOADING,
  data,
});
export const setHomeMenu = data => ({
  type: SET_HOME_MENU,
  data,
});
export const fetchTypeRelatedData = data => ({
  type: FETCH_TYPE_RELATED_DATA,
  data,
});
export const setTotalTypeCount = data => ({
  type: SET_TOTAL_TYPE_COUNT,
  data
});
export const setTypeData = data => ({
  type: SET_TYPE_DATA,
  data,
})