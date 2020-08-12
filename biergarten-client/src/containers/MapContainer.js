import React from 'react'
import {GoogleApiWrapper} from 'google-maps-react'

const MapContainer = () => {
    return(
        <div>
            Map Container
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY))
  })(MapContainer)