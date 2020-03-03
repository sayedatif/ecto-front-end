import { takeEvery, all } from 'redux-saga/effects';
import { firstSaga } from './initSaga';
import { INITIAL_FETCH_REQUEST } from '../actions';

export default function* rootSaga() {
  yield all([
    takeEvery(INITIAL_FETCH_REQUEST, firstSaga),
  ])
}