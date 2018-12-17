import axios from 'axios';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import Action from '../constants/actions';
import { API } from '../constants/config';
import _ from 'lodash';

function* loadData() {
  let data;
  try {
    const res = yield call(axios, {
      url: API.getAll,
      method: 'GET',
      cors: true
    });
    data = res.data;
  } catch (e) {
    throw new Error('Error while fetching data.')
  }

  yield put({
    type: Action.r_loadData,
    payload: data
  });

  // Preload images to the browser
  const pictures = _.flatten([data.species, data.animals]).reduce((acc, e) => {
    if (e.thumbnailImg) {
      acc.push(e.thumbnailImg);
    }
    if (e.img) {
      acc.push(e.img);
    }
    if (e.detailImg) {
      acc.push(e.detailImg);
    }
    return acc;
  }, []);

  pictures.forEach((picture) => {
    const img = new Image();
    img.src = picture;
  });
}

function* login(action) {
  const { payload } = action;
  let data;
  try {
    const res = yield call(axios, {
      url: API.login,
      method: 'POST',
      cors: true,
      data: payload
    });
    data = res.data;
  } catch (e) {
    throw new Error('Error while logging in')
  }
  yield put({
    type: Action.r_login,
    payload: data
  });
}

function* register(action) {
  const { payload } = action;
  let data;
  try {
    const res = yield call(axios, {
      url: API.register,
      method: 'POST',
      cors: true,
      data: payload
    });
    data = res.data;
  } catch (e) {
    throw new Error('Error while logging in')
  }
  yield put({
    type: Action.r_register,
    payload: data
  });
}

function closeModal() {
  window.$('#myModal').modal('toggle');
  window.$('.modal-backdrop').hide();
}

export default function*() {
  yield all([
    takeEvery(Action.loadData, loadData),
    takeEvery(Action.login, login),
    takeEvery(Action.register, register)
  ])
}
 
 