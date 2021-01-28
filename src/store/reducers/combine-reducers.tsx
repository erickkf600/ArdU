import { combineReducers } from "redux"

import themeReducer from './themeReducer'
import toggleLocations from './toggleLocationReducer'
import locationReducer from './locationReducer'
import toggleMenu from './toggleMenuReducer'

export default combineReducers({
    themeReducer,
    toggleLocations,
    locationReducer,
    toggleMenu
})