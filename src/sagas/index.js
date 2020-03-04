import { takeEvery, all } from 'redux-saga/effects';
import { firstSaga, fetchTypeRelatedDataSaga } from './initSaga';
import {
  INITIAL_FETCH_REQUEST,
  FETCH_TYPE_RELATED_DATA
} from '../actions';

export default function* rootSaga() {
  yield all([
    takeEvery(INITIAL_FETCH_REQUEST, firstSaga),
    takeEvery(FETCH_TYPE_RELATED_DATA, fetchTypeRelatedDataSaga)
  ])
}