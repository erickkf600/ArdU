import React from "react"
import { useLoadScript, GoogleMap, Circle, Marker } from '@react-google-maps/api'
import * as actions from './index.action'

import { PlacesInterface } from "../../interfaces/places";
const libraries:any[]  = ["places"];

function Map({location}: any) {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY),
        libraries,
      })
     
    return isLoaded ? (
        <>
            {
                loadError ? <p>Error</p> : ''
            }
            <div className="home__map">
                <GoogleMap
                    mapContainerStyle={actions.containerStyle}
                    zoom={15}
                    center={location}
                    options={actions.options}

                >
                    <Marker
                        position={{  lat: location.lat, lng: location.lng }}
                        icon={{
                           url: '/location-pin.svg',
                           origin: new window.google.maps.Point(0, 0),
                           anchor: new window.google.maps.Point(15, 15),
                           scaledSize: new window.google.maps.Size(30, 30),
                        }}
                    ></Marker>
                    <Circle
                         center={{ lat: location.lat, lng: location.lng }}
                         radius={2000}
                         options= {{
                            strokeColor: "#CACAD9",
                            fillOpacity: 0
                          }}
                    ></Circle>
                </GoogleMap>
            </div>
        </>
    ) : <></>
}
export default Map