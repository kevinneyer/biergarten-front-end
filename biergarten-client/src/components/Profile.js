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
    //     this.fetchUser() 
    // }

    removeHandler = (id) => {
      fetch(`http://localhost:3001/api/v1/favorites/${id}`, {
          method: 'DELETE',
          headers: {
              'content-type': 'application/json',
              "Authorization": localStorage.token
          }
      })
      .then( () => {
          this.props.currentUser.favorites.filter(fave => fave.favorite_id !== id)
      })
    }

    render(){
    console.log(this.props.currentUser)
    return(
        <>
        <h1 className='profile-header'>{this.props.currentUser ? this.props.currentUser.username + '\'s ' + 'Profile Page' : 'Profile Page'}</h1>
        <div className='profile-card' >
          <div class="ui card">
            <div class="image">
            {this.props.currentUser ?  <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"/> : null }
            </div>
            <div class="content">
            {this.props.currentUser ? <a class="header">{this.props.currentUser.username}</a> : null }
            </div>
          </div>
          <div>
            {this.props.currentUser ? this.props.currentUser.reviews.map((review, key) => 
            <li>{review.beer} - {review.content}</li>)
            :
            null
            }

        </div>
        </div>

            <div className='favorites'>
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
      
        </>
    )
  }
}

export default Profile 