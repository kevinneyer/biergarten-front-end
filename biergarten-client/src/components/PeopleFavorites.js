import React from 'react'
import {useState, useEffect} from 'react'
import {Card, Image, Button, Header} from 'semantic-ui-react'

const PeopleFavorites = (props) => {

    const [favorites, setFavorites] = useState([])
    
    useEffect(() => {
        getFaves()
    })
      
    const getFaves = () => {
        if(props.showPerson.favorites){
          setFavorites(props.showPerson.favorites)
        }
    }

    return(
        <div>
            <Header as='h3' content='Desired Beers!' />
                {favorites ? favorites.map((favorite, key) => 
                // <li>
                //   <a href={`/beers/${favorite.beer_id}`}>{favorite.beer}</a>
                // </li>) 
                    <Card centered key={key}> 
                      <Image src={favorite.image} size='small' centered/>
                      <Card.Content>
                        <Card.Header>{favorite.beer}</Card.Header>
                        <Card.Description>Brewer: {favorite.brewery}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <span><Button color='black' href={`/beers/${favorite.beer_id}`}>See More Info</Button></span>
                      </Card.Content>
                    </Card>
                )
                : 
                null 
                }

        </div>
    )
}

export default PeopleFavorites