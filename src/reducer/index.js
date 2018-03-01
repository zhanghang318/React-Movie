import {combineReducers} from 'redux'
import {hotMovieList,testType} from './Test'
const reducer = combineReducers({
    hotMovieList,
    testType
})
export default reducer