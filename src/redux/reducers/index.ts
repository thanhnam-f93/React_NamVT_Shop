import { combineReducers } from 'redux'
import dataReducers from './dataReducer'


const reducers = combineReducers({
    data: dataReducers

})

export default (state: any, action: any) => reducers(state, action)