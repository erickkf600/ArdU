import { Variables } from "../../../App.variables";

const InicialCoordenates: any = {
    lat: -22.908333,
    lng: -43.196388
};

export default function locationReducer(state = InicialCoordenates, action: any) {
    if(action.type ===  Variables.SET_LOCATION){
        const { latitude, longitude } = action.position
        return {
            ...state,
            lat: latitude,
            lng: longitude
        }
    }
    return state
}
  