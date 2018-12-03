import { all } from 'redux-saga/effects';
import UserSaga from './userSaga';


export default function*() {
  yield all([
    UserSaga()
  ])
}