/**
 * Created by 12718 on 2017/6/11.
 */
import { combineReducers } from 'redux'
import defaultPage from './defaultPage'
import Home from './Home/Home'

const rootReducers = combineReducers({
    defaultPage,
    Home
})
export default rootReducers