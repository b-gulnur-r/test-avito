import { takeLatest } from 'redux-saga/effects'
import { handleGetNews } from './handlers'
import { GET_NEWS } from '../ducks'

export function* watcherSaga(){
    yield takeLatest(GET_NEWS, handleGetNews)
}