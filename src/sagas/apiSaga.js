import axios from 'axios';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import Action from '../constants/actions';

function* loadData() {
  //TODO: TONY
  // const data = yield call(axios.get, 'apiUrl');
  const data = {
    data: [
      'panda',
      'tiger',
      'lion',
      'parrot',
      'zebra',
      'tarantula',
      'giraffe',
      'gorilla',
      'redPanda',
      'crocodile',
      'ape',
      'elephant'
    ]
  };
  yield put({
    type: Action.r_loadData,
    payload: data.data
  });
}

function* loadAnimals(action) {
  const species = action.payload.species;
  //TODO: TONY
  // const data = yield call(axios.get, 'apiUrl');
  const data = {
    data: [
      'first one',
      'the second one',
      'another animal',
      'the very last animal',
      'haha, another animal'
    ]
  };
  yield put({
    type: Action.r_loadAnimals,
    payload: {data: data.data, species}
  });
}

export default function*() {
  yield all([
    takeEvery(Action.loadData, loadData),
    takeEvery(Action.loadAnimals, loadAnimals)
  ])
}
 
 