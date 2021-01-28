import { Variables } from "../../../App.variables"

const toogle = {
    opened: false
  }

export default function toggleMenu(state = toogle, action: any) {
    if(action.type === Variables.TOGGLE_MENU){
        return {
            ...state,
            opened: !state.opened
        }
    }
    return state
}
  