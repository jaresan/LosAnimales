import { all } from 'redux-saga/effects';
import UserSaga from './userSaga';
import SpeciesSaga from './dataSaga';


export default function*() {
  yield all([
    UserSaga(),
    SpeciesSaga()
  ])
}