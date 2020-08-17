import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'

const PeopleCards = (props) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/users')
        .then(res => res.json())
        .then(users => {
            setUsers( users )
        })
    }, [])

    return(
        <div className='index'>
        <div className='beer-contain'>
        <div>
          {users ? 
            users.map( (user, key) =>
          <Segment raised>
              <div key={key} className='beer-card'>
               <img className='card-image' src="https://semantic-ui.com/images/avatar2/large/kristy.png" alt={user.username}/>
               <h3>Username: {user.username}</h3> 
               <p>Followers: {user.followers.length} </p>
               <p>Following: {user.followeds.length} </p>
               <Button color='blue' onClick={() => props.history.push(`${props.match.path}${user.id}`)}>{`See ${user.username}\'s profile`}</Button>
              </div>
              </Segment>
          )
           :
           <div>Loading</div>
        }
        </div>
        </div>
        </div>
    )
}

export default PeopleCards