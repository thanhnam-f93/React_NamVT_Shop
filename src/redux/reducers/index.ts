import { combineReducers } from 'redux'
import todoReducers from './todo'
const reducers = combineReducers({
    todo: todoReducers
})

export default (state: any, action: any) => reducers(state, action)