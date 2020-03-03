//action types
export const INITIAL_FETCH_REQUEST = 'INITIAL_FETCH_REQUEST';
export const INITIAL_LOADING = 'INITIAL_LOADING';
export const SET_HOME_MENU = 'SET_HOME_MENU';

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