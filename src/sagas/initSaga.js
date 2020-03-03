import { call, put } from 'redux-saga/effects';
import { fetchInitAPI } from '../api';
import { initialLoading, setHomeMenu } from '../actions';
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