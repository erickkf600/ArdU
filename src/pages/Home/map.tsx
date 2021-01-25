import { useLoadScript, GoogleMap } from '@react-google-maps/api'
import * as actions from './index.action'

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
                    zoom={18}
                    center={location}
                    options={actions.options}
                ></GoogleMap>
            </div>
        </>
    ) : <></>
}
export default Map