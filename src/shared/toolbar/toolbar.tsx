import React from 'react'
import placeholder from './../../assets/user-placeholder.png'
import { Link } from "react-router-dom"
function Toolbar() {
    return (
        <header className="toolbar">
            <div className="toolbar__search">
                <button className="toolbar__mobile-menu"><i className="icon-menu-mobile"></i></button>
                <i className="icon-search toolbar__search-icon"></i>
                <input type="text" placeholder="Pesquise por lugares..." className="toolbar__search-input"/>
            </div>

            <div className="toolbar__user">
                <button className="toolbar__user-favorites toolbar__user-favorites"><i className="icon-heart"></i></button>
                <Link className="toolbar__user-button" to="/perfil">
                    <img src={placeholder} alt="user placeholder" title="ArdU user placeholder" className="toolbar__user-button-img"/>
                </Link>
            </div>
        </header>
    )
}
export default Toolbar