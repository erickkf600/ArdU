import React from 'react'
import placeholder from './../../assets/user-placeholder.png'
import { Link } from "react-router-dom"
import * as actions from './toobar.action'
import { connect } from 'react-redux'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete"
import { PlacesInterface } from '../../interfaces/places'
function Toolbar({dispatch, search, location}: any) {
    const user: any = localStorage.getItem('user')
    const userData = JSON.parse(user)
    
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => location.lat, lng: () => location.lng },
            radius: 300,
        } as PlacesInterface
    })

    return (
        <header className="toolbar">
            <div className="toolbar__search">
                <button className="toolbar__mobile-menu"  onClick={() => dispatch(actions.toggleMenu())}><i className="icon-menu-mobile"></i></button>
                <i className="icon-search toolbar__search-icon"></i>
                <input type="text" placeholder="Pesquise por lugares..." className="toolbar__search-input"  onChange={event => setValue(event.target.value)}/>
            </div>

            <div className="toolbar__user">
                <button className="toolbar__user-favorites toolbar__user-favorites"><i className="icon-heart"></i></button>
                <Link className="toolbar__user-button" to="/perfil">
                    <img src={userData ? userData.avatar : placeholder} alt="user placeholder" title="ArdU user placeholder" className="toolbar__user-button-img"/>
                </Link>
            </div>
        </header>
    )
}
export default connect()(Toolbar)
