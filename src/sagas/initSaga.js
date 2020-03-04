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
} from '../actions';
import { IconMap } from '../utils/IconMap';

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
    const { data: resData } = yield call(fetchTypeAPI, data);
    console.log('resData', resData);
    yield put(setTotalTypeCount(resData.count))
    yield put(setTypeData(resData.results))
  } catch (e) {
    console.log('Error in fetchTypeRelatedDataSaga', e);
  }
}