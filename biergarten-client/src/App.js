import React from 'react'
import HomeContainer from './containers/HomeContainer'

console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (
    <div>
        <HomeContainer />
    </div>
  )
}

export default App
