import { all } from "redux-saga/effects";

let watch = [];

export default function* rootSaga() {
  yield all(watch);
}
