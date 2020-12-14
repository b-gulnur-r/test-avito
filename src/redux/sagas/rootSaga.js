import { takeLatest, all } from "redux-saga/effects"
import { handleGetNews, handleGetComment } from "./handlers"
import { GET_NEWS } from "../ducks"
import { GET_COMMENT } from "../ducks/commets"

function* sagaGetNews() {
  yield takeLatest(GET_NEWS, handleGetNews)
}

function* sagaGetComments() {
  yield takeLatest(GET_COMMENT, handleGetComment)
}

export function* watcherSaga() {
  yield all([sagaGetNews(), sagaGetComments()])
}
