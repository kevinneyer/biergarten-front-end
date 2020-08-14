import React from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'

class MapContainer extends React.Component {

  state = {
    breweries: [],
    userLocation: {
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

  fetchPlaces = (mapProps, map) => {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    service.textSearch(
      {location: this.state.userLocation, radius: 500, query: 'breweries'},
      function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK){
         console.log(results)
        }
      }
    )
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
      <>
      <Map 
      style={style} 
      google={google}
      zoom={14}
      initialCenter={userLocation}
      onReady={this.fetchPlaces}
      >

      <Marker
      name={'Your location'}
      position={{ lat: userLocation.lat, lng: userLocation.lng} } />
      </Map>
      </>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
  })(MapContainer)