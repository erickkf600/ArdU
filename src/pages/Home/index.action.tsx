import mapStyles from "../../assets/theme/mapStyles"
import { Variables } from "./../../App.variables"

//MAPS CONFIGS
const map: any[] = mapStyles
export const containerStyle = {
  width: '100%',
  height: '100%',
  margin: 'auto',
  zIndex: 1
};
export const InicialCoordenates = {
  lat: -22.908333,
  lng: -43.196388
};
export const options = {
  styles: map,
  disableDefaultUI: true,
  zoomControl: false,
};

//RETORNA OS DADOS DO REDUCE 
export const mapStateToProps = (state: any) => ({
  toggle: state.toggleLocations,
  location: state.locationReducer
})



//Envia para o reducer
export function toggleLocations() {
  return {
    type: Variables.TOGGLE_LOCATIONS
  }
}
//GET LOCATION
export const location = () =>{
  return async (dispatch: any) =>{
    navigator.geolocation.getCurrentPosition(position =>{
      dispatch({type: Variables.SET_LOCATION, position: position.coords})
    })
  }
}
