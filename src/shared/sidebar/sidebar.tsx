import React from 'react'
import { menuItems } from './menu-items'
import * as actions from './sidebar.action'
function Sidebar() {

    return(
        <div className="side-menu">
        <button  className="side-menu__toggle" onClick={() => actions.toggleMenu()}><i className="icon-menu-desktop"></i></button>
        <ul  className="side-menu__ul">
            {menuItems.map((item, i) => (
                <li key={i} className='side-menu__ul-li'>
                    <i className={item.icon}></i>
                </li>
            ))}
        </ul>
        </div>
    )
}
export default Sidebar