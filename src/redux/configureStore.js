import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import newsReducer from './ducks'
import { watcherSaga } from './sagas/rootSaga'

const reducer = combineReducers({
    news: newsReducer
})

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store