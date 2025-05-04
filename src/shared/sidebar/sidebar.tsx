import React from 'react'
import { menuItems } from './menu-items'
import * as actions from './sidebar.action'
import { connect } from 'react-redux'

function Sidebar({dispatch, toggle}: any) {
    return(
        // ${toggle ? 'open' : ''}
        <div className={`side-menu ${toggle ? 'open' : ''}`}>
        <button  className='side-menu__toggle' onClick={() => dispatch(actions.toggleMenu())}>
            {!toggle ? <i className="icon-menu-desktop desktop"></i>: <i className="icon-cancel-circle close"></i>}
        </button>

        <ul  className={`side-menu__ul  ${toggle ? 'open': ''}`}>
            {menuItems.map((item, i) => (
                <li key={i} className={`side-menu__ul-li  ${toggle ? 'open': ''}`}>
                    <i className={item.icon}></i>
                    <p className={`side-menu__ul-li-label ${toggle ? 'open': ''}`}>{item.name}</p>                  
                </li>
            ))}
        </ul>
        </div>
    )
}

export default connect(
    actions.mapStateToProps)
(Sidebar)