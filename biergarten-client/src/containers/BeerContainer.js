import React from 'react'
import BeerCards from '../components/BeerCards'
import BeerPage from '../components/BeerPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
              <Router>
                <Route exact path="/beers" render={(routerProps) => <BeerCards beers={this.state.beers} {...routerProps} />} />
                <Route exact path="/beers/:id" render={(routerProps) => <BeerPage beers={this.state.beers} {...routerProps} />} />
              </Router>
            </div>
        )
    }
}

export default BeerContainer