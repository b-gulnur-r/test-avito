import { call, put } from 'redux-saga/effects'
import { requestFetchNews, requestFetchComments } from '../requests'
import { setNews } from '../../ducks'
import { setComment } from '../../ducks/commets'

export function* handleGetNews(action) {
    try {
        const data = yield call(requestFetchNews)
        yield put(setNews(data))
    } catch (error){
        console.log(error)
    }
}

export function* handleGetComment(action) {
    try {
        const data = yield call(requestFetchComments, action.newId)
        yield put(setComment(data))
    } catch (error){
        console.log(error)
    }
}