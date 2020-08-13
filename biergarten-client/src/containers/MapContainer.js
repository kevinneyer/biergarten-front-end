import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'
// import Map from '../components/Map'


class MapContainer extends React.Component {

  render() {
    
  const style = {
    width: '60%',
    height: '50%'
  }

  const containerStyle = {
    position: 'relative',
    width: '60%',
    height: '50%'
  }
  
  return (
    <div >
      <Map style={containerStyle} google={this.props.google} zoom={14}/>
    </div>
  )
 }
}

export default GoogleApiWrapper({
    apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
  })(MapContainer)