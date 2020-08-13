import React from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
// import Map from '../components/Map'
import CurrentPin from '../components/CurrentPin'
import {Icon} from 'semantic-ui-react'

class MapContainer extends React.Component {

  state = {
    breweries: [],
    userLocation: {
      lat: '',
      lng: ''
    },
    loading: true,
    infoWindow: false,
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
    console.log(this.state.infoWindow)
    return (
      <Map 
      style={style} 
      google={google}
      zoom={14}
      initialCenter={userLocation}
      >

      <Marker
      name={'Your location'}
      position={{ lat: userLocation.lat, lng: userLocation.lng} } />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
  })(MapContainer)