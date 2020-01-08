import { all } from "redux-saga/effects";
import { newsSaga } from "../modules/news";

export default function* rootSaga() {
  yield all([newsSaga()]);
}