import { combineReducers } from 'redux'
import todoReducers from './todo'
import movieReducers from './movie'
const reducers = combineReducers({
    // todo: todoReducers,
    movie: movieReducers

})
export default (state: any, action: any) => reducers(state, action)