import React from 'react'
import { Card, Icon, Image, Button , Header} from 'semantic-ui-react'

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
                <Header centered as='h3' content='Desired Beers!'/>
                {this.state.favorites ? this.state.favorites.map((favorite, key) => 
                // <li>
                //   <a href={`/beers/${favorite.beer_id}`}>{favorite.beer}</a>
                // </li>) 
                // <div key={key} className='profile-favorite'>
                    <Card centered>
                    <Image src={favorite.image} size='small' centered/>
                    <Card.Content>
                      <Card.Header>{favorite.beer}</Card.Header>
                      <Card.Description>
                        Brewer: {favorite.brewery}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <span><Button color='black' href={`/beers/${favorite.beer_id}`}>See More Info</Button></span>
                        <span><Button color='red' onClick={() => this.removeHandler(favorite.favorite_id)}>Remove from Favorites</Button></span>
                        </Card.Content>
                
                {/* <img className='card-image' src={favorite.image} alt={favorite.beer}/> */}
                {/* <h3>Name: {favorite.beer}</h3> */}
                {/* <h3>Brewer: {favorite.brewery}</h3>  */}
                {/* <button><a href={`/beers/${favorite.beer_id}`}>See More Info</a></button>
                <button onClick={() => this.removeHandler(favorite.favorite_id)}>Remove from Favorites</button> */}
                </Card>
                // </div>
                )
                : null }
            </div>
            </div>
        )
    }
}

export default Favorites 