import { Variables } from "../../App.variables";
import onClickOutside from "react-onclickoutside"

//RETORNA OS DADOS DO REDUCE 
export const mapStateToProps = (state: any) => ({
    toggle: state.toggleMenu?.opened
  })

export const toggleMenu = () => {
    return {
        type: Variables.TOGGLE_MENU
      }
};