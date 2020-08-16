import React from 'react'
import {useState, useEffect} from 'react'

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
            <div className='favorites'>
                <h3>Favorites: </h3>
                  {favorites ? favorites.map((favorite, key) => 
                    // <li>
                    //   <a href={`/beers/${favorite.beer_id}`}>{favorite.beer}</a>
                    // </li>) 
                <div key={key} className='beer-card'>
                  <img className='card-image' src={favorite.image} alt={favorite.beer}/>
                  <h3>Name: {favorite.beer}</h3>
                  <h3>Brewer: {favorite.brewery}</h3> 
                  <button><a href={`/beers/${favorite.beer_id}`}>See More Info</a></button>
                </div>
                )
                : null 
                }

            </div>
        </div>
    )
}

export default PeopleFavorites