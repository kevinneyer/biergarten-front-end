import React from 'react'
 
class Breweries extends React.Component{
    
    // componentDidMount(){
    //     fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=breweries&inputtype=textquery&fields=formatted_address,name&locationbias=circle:2000@${this.props.lat},${this.props.lng}&key=${this.props.lng}&radius=1500&type=breweries&key=${process.env.REACT_APP_GOOGLE_API_KEY}
    //     `, {
    //     method: "GET", 
    //     headers: {
    //         'Access-Control-Allow-Origin': "*"
    //      }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }

    // https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=breweries&inputtype=textquery&fields=formatted_address,name&locationbias=circle:2000@${this.props.lat},${this.props.lng}&key=${this.props.lng}&radius=1500&type=breweries&key=${process.env.REACT_APP_GOOGLE_API_KEY}

    render(){
        return(
            <div>

            </div>
        )
    }

}
export default Breweries