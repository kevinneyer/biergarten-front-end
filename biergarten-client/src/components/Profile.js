import React from 'react'

class Profile extends React.Component{

    state = {
        favorites: []
    }

    // fetchUser(){
    //     fetch(`http://localhost:3001/api/v1/users/${this.props.currentUser.id}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // }

    // componentDidMount(){
    //   this.props.currentUser ? this.fetchUser() : null
        
    // }

    removeHandler = (id) => {
      fetch(`http://localhost:3001/api/v1/favorites/${id}`, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json',
              "Authorization": localStorage.token
          }
      })
    }

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
                <button><a href={`/beers/${favorite.beer_id}`}>See More Info</a></button>
                <button onClick={() => this.removeHandler(favorite.favorite_id)}>Remove from Favorites</button>
                </div>
                )
                : null }
            </div>
        </div>
    )
  }
}

export default Profile 