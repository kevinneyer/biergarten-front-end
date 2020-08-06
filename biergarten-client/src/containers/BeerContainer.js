import React from 'react'
import BeerCards from '../components/BeerCards'
import BeerPage from '../components/BeerPage'

const beerAPI = 'http://localhost:3001/api/v1/beers'

class BeerContainer extends React.Component{

    state = {
        beers: []
    }

    componentDidMount(){
      fetch(beerAPI)
      .then(res => res.json())
      .then(beers => {
          this.setState({ beers })
      })
    }

    render(){
        return(
            <div>
              <BeerCards />
              <BeerPage />
            </div>
        )
    }
}

export default BeerContainer