import * as jokesAction from '../constant';
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchJokes(number) {
  const numberOfJokes = number.count;

  const json = yield fetch(
    `http://api.icndb.com/jokes/random/${numberOfJokes}?limitTo=[nerdy,explicit]`
  ).then((response) => response.json());
  yield put({ type: 'JOKES_RECEIVED', json: json.value });
}

function* actionWatcher() {
  yield takeLatest(jokesAction.GET_JOKES, fetchJokes);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
