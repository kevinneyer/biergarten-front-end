import React from 'react'
import { render } from 'react-dom'

class Marker extends React.Component{
    
    render(){
    return(
        null
    )
    }
}

Marker.propTypes = {
    position: React.PropTypes.object,
    map: React.PropTypes.object
}

let marker = new google.maps.Marker({
    position: something,
    map: map
})

export default Marker