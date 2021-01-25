import React, { useEffect } from 'react'
import Toolbar from "./../../shared/toolbar/toolbar"
import { connect } from 'react-redux'
import * as actions from './index.action'
import Map from './map'
import { HomeInterface } from '../../interfaces/home'
import { useScrollBoost } from 'react-scrollbooster'

function Home({dispatch, toggle, location}: HomeInterface) {

    //SCROLL WITH MOUSE DRAG
    const [viewport] = useScrollBoost({
        direction: 'vertical',
        scrollMode: 'native',
    });

    useEffect(() => {
        dispatch(actions.location())
      }, []);
    return (
        <div className="home">
            <Toolbar />
            <Map location={location}/>
                <div className={`home__locations ${toggle.opened ? 'home__locations--hide': ''}`}>
                    <div  className="home__locations-head">
                        <p className="home__locations-head-title">10 Restaurantes perto de você</p>
                        <button className="icon-arrow-thin-right home__locations-head-close" onClick={() => dispatch(actions.toggleLocations())}></button>
                    </div>
    
                    <div className="home__locations-scroll" ref={viewport}>
                        <div className="home__locations-card"></div>
                        <div className="home__locations-card"></div>
                        <div className="home__locations-card"></div>
                        <div className="home__locations-card"></div>
                        <div className="home__locations-card"></div>
    
                    </div>
                   
                </div>
        </div>
    )
}
export default connect(
    actions.mapStateToProps)
(Home)