import { call } from 'redux-saga/effects';
import { fetchInitAPI } from '../api';

export function* firstSaga() {
  try {
    const { data } = yield call(fetchInitAPI);
    // console.log('datta', data);
  } catch(e) {
    console.log('Error in firstSaga', e);
  }
}