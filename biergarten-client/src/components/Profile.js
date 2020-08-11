import React from 'react'

class Profile extends React.Component{

    // state = {
    //     favorites: []
    // }

    // componentDidMount(){
    //     fetch('http://localhost:3001/api/v1/favorites')
    //     .then(res => res.json())
    //     .then(favorites => {
    //         console.log(favorites)
    //        let faves = favorites.filter(favorite => favorite.user.user_id === this.props.currentUser.id) 
    //        this.setState({ favorites: faves})
    //     })
    // }

    render(){
        // console.log(this.state)
    return(
        <div>
            {this.props.currentUser ? this.props.currentUser.username + '\'s ' + 'Profile Page' : 'Profile Page'}
            <div>
                <h3>Favorites: </h3>
                {this.props.currentUser ? this.props.currentUser.favorites.map((favorite, key) => 
                // <li>
                //   <a href={`/beers/${favorite.beer_id}`}>{favorite.beer}</a>
                // </li>) 
                <div key={key} className='beer-card'>
                <img className='card-image' src={favorite.image} alt={favorite.beer}/>
                <h3>Name: {favorite.beer}</h3>
                <h3>Brewer: {favorite.brewery}</h3> 
                <button onClick={() => this.props.history.push(`beers/${favorite.beer_id}`)}>See More Info</button>
                </div>
                )
                : null }
            </div>
        </div>
    )
  }
}

export default Profile 