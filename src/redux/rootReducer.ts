import { combineReducers } from 'redux'
import usersReducer from './user/UserReducer'
import devicesReducer from './device/DevicesReducer'
export default combineReducers({
    usersReducer,
    devicesReducer
})