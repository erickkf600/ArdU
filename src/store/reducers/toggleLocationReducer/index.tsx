import { Variables } from "../../../App.variables"

const locationsBool = {
    opened: false
  }

export default function toggleLocationsCards(state = locationsBool, action: any) {
    if(action.type === Variables.TOGGLE_LOCATIONS){
        return {
            ...state,
            opened: !state.opened
        }
    }
    return state
}
  