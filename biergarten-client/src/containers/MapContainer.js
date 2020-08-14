import React from 'react'
import {Map, GoogleApiWrapper, Marker, Listing, InfoWindow} from 'google-maps-react'
import { Loader, Dimmer, Segment, Image } from 'semantic-ui-react'
import { geocodeByPlaceId } from 'react-google-places-autocomplete';

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

  // getLatLong = (result, mapProps, map) => {
  //   const {google} = mapProps;
  //   let geocoder = new google.maps.Geocoder(map);
  //   let address = result.formatted_address
  //   const beerArray = []
    
  //   geocoder.geocode({
  //     'address': address
  //   }, function(results, status) {
  
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       let latitude = results.getPlace().geometry.location.lat();
  //       let longitude = results.getPlace().geometry.location.lng();
  //       return <Marker name={result.name} position={{ lat: latitude, lng: longitude} }/>
  //     }
  //   });
  // }

  // getGeocode = (placeID) => { 
  //   geocodeByPlaceId(placeID)
  //   .then(results => console.log(results))
  //   .catch(error => console.error(error));
  // }

  fetchPlaces = (mapProps, map) => {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    service.textSearch(
      {location: this.state.userLocation, radius: 500, query: 'breweries'},
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK){
          this.setState({ breweries: results})
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
      return (    
      <Segment>
        <Dimmer active>
          <Loader size='big'>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
      )
    }
     console.log(this.state)
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