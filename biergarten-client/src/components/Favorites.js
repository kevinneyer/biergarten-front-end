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
                <Header centered as='h3' content='Desired Beers!'/>
                {this.state.favorites ? this.state.favorites.map((favorite, key) => 
                    <Card key={key} centered>
                        <Image src={favorite.image} size='small' centered/>
                        <Card.Content>
                            <Card.Header>{favorite.beer}</Card.Header>
                            <Card.Description>
                                Brewer: {favorite.brewery}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button.Group  vertical>
                                <Button color='grey' href={`/beers/${favorite.beer_id}`}>See More Info</Button>
                                <Button color='black' onClick={() => this.removeHandler(favorite.favorite_id)}>Remove from Desired Beer</Button>
                            </Button.Group>
                        </Card.Content>
                    </Card>
                )
                : 
                null 
                }
            </div>
        )
    }
}

export default Favorites 