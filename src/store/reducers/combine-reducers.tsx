import { combineReducers } from "redux"

import themeReducer from './themeReducer'
import toggleLocations from './toggleLocationReducer'
import locationReducer from './locationReducer'

export default combineReducers({
    themeReducer,
    toggleLocations,
    locationReducer
})