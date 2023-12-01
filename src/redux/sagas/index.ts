import { all } from 'redux-saga/effects'
import todoSaga from './todo'
import movieSaga from './movie'


export default function* rootSaga() {
    yield all([
        // todoSaga(),
        movieSaga()
    ])
}