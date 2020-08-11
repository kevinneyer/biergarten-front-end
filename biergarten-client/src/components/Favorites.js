import React from 'react'

class Favorites extends React.Component{

    state = {
        favorites: []
    }
    
    componentDidMount(){
      this.getFaves()
    }

    getFaves = () => {
        if(this.props.currentUser){
            this.setState({
                favorites: this.props.currentUser.favorites
            })
        }
    }

    removeHandler = (id) => {
        fetch(`http://localhost:3001/api/v1/favorites/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                "Authorization": localStorage.token
            }
        })
        .then( () => {
           let newFaves =  this.state.favorites.filter(fave => fave.favorite_id !== id)
           this.setState({ favorites: newFaves })
        })
      }
    
    render(){
        return(
            <div>
                <div className='favorites'>
                <h3>Favorites: </h3>
                {this.state.favorites ? this.state.favorites.map((favorite, key) => 
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

export default Favorites 