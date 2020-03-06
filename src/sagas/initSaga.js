import { call, put, select } from 'redux-saga/effects';
import {
  fetchInitAPI,
  fetchTypeAPI
} from '../api';
import {
  initialLoading,
  setHomeMenu,
  setTotalTypeCount,
  setTypeData,
  setShowListLoading,
  setSelectedPage,
  searchTextSelector,
} from '../actions';
import { IconMap } from '../utils';

export function* firstSaga() {
  try {
    yield put(initialLoading(true));
    let types = sessionStorage.getItem('types');
    if (!types) {
      const { data } = yield call(fetchInitAPI);
      types = JSON.stringify(data);
      sessionStorage.setItem('types', types);
    }
    const parsedTypes = JSON.parse(types);
    if (parsedTypes) {
      const menu = Object.keys(parsedTypes).map(item => {
        return {
          label: `${item.charAt(0).toUpperCase()}${item.slice(1)}`,
          component: IconMap[item] ? IconMap[item] : IconMap['default'],
          key: item
        }
      });
      yield put(setHomeMenu(menu));
      yield put(initialLoading(false));
    }
  } catch(e) {
    console.log('Error in firstSaga', e);
  }
}

export function* fetchTypeRelatedDataSaga({ data }) {
  try {
    const search = yield select(searchTextSelector)
    yield put(setShowListLoading(true));
    const query = {
      page: data.page
    }
    if (search) {
      query.search = search;
    }
    const { data: resData } = yield call(fetchTypeAPI, data.type, query);
    yield put(setTotalTypeCount(resData.count));
    yield put(setTypeData(resData.results));
    if (data.page) {
      yield put(setSelectedPage(data.page))
    }
    yield put(setShowListLoading(false));
  } catch (e) {
    console.log('Error in fetchTypeRelatedDataSaga', e);
  }
}