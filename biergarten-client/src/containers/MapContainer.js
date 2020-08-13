import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
// import Map from '../components/Map'


class MapContainer extends React.Component {

  state = {
    breweries: [],
    currentLocation: {
      lat: '',
      lng: ''
    },
    loading: true
  }

  componentDidMount() {
    this.getLocation()
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
      const {latitude, longitude} = position.coords
      
      this.setState({
        userLocation: {lat: latitude, lng: longitude},
        loading: false
      })
    })

  }

  render() {

    const style = {
      width: '60%',
      height: '60%'
    }

    const { loading, userLocation } = this.state
    const { google } = this.props

    if (loading) {
      return null;
    }

    return (
      <Map 
      style={style} 
      google={google}
      zoom={12}
      initialCenter={userLocation}
      >

      <Marker position={null} /> 
      </Map>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
  })(MapContainer)