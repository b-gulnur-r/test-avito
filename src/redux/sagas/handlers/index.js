import { call, put } from 'redux-saga/effects'
import { requestFetchNews } from '../requests'
import { setNews } from '../../ducks'

export function* handleGetNews(action) {
    try {
        const data = yield call(requestFetchNews)
        yield put(setNews(data))
    } catch (error){
        console.log(error)
    }
}