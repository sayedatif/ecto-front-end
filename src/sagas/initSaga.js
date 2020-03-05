import { call, put } from 'redux-saga/effects';
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
} from '../actions';
import { IconMap } from '../utils';

export function* firstSaga() {
  try {
    yield put(initialLoading(true));
    const { data } = yield call(fetchInitAPI);
    if (data) {
      const menu = Object.keys(data).map(item => {
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
    yield put(setShowListLoading(true));
    const { data: resData } = yield call(fetchTypeAPI, data.type, { page: data.page });
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