import { Variables } from "../../App.variables";


export const toggleMenu = () => {
    return {
        type: Variables.TOGGLE_MENU
      }
};
export const setPlace = (place: any) => {
    console.log(place)
};