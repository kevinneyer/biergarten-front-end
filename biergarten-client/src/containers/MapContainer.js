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
    activeLoaction: [],
    selectedPlace: []
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

  showDetails = (marker, props) => {
    this.setState({ infoWindow: true, 
       activeLocation: marker , 
       selectedPlace: props})
  }

//   getNearbyPlaces = (position) => {
//     let request = {
//       location: position,
//       rankBy: maps.places.RankBy.DISTANCE,
//       keyword: 'breweries'
//     };

//     let service = new google.maps.places.PlacesService(map);
//     service.nearbySearch(request, this.nearbyCallback);
// }

//   nearbyCallback = (results, status) => {
//     if (status == google.maps.places.PlacesServiceStatus.OK) {
//     this.createMarkers(results);
//     }
//   }

//   createMarkers = (places) => {
//     places.forEach(place => {
//     marker = new google.maps.Marker({
//         position: place.geometry.location,
//         map: map,
//         title: place.name
//     });
//   })
// }

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
      onClick
      >

      {/* <Marker position={null} />  */}
      <Marker
      name={'Your location'}
      position={{ lat: userLocation.lat, lng: userLocation.lng} }
      onClick={ this.showDetails} />
       <InfoWindow visible={this.state.infoWindow} marker={this.state.activeLocation} ><h1>{this.state.selectedPlace}</h1></InfoWindow> 
      </Map>
    )
  }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
  })(MapContainer)