import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Segment, Card, Button, Image, Icon } from 'semantic-ui-react'

const PeopleCards = (props) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/users')
        .then(res => res.json())
        .then(users => {
            setUsers( users )
        })
    }, [])
     console.log(users)
    return(
        <>
        <div>
        <Card.Group itemsPerRow={3}>
          {users ? 
            users.map( (user, key) =>
          <Card raised>
              <div key={key} className='beer-card'>
               <Image src={user.image} size='small' alt={user.username}/>
               <Card.Content>
                 <Card.Header>{user.username}</Card.Header>
                 <Card.Description>
                   Has {user.favorites.length} favorites
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <p><Icon name='user' />
                      {user.followers.length} Followers
                    </p>
                    <p><Icon name='user' />
                      Following {user.followeds.length} 
                    </p>
                    <Button color='blue' onClick={() => props.history.push(`${props.match.path}${user.id}`)}>{`See ${user.username}\'s profile`}</Button>
                    </Card.Content>
               {/* <h3>Username: {user.username}</h3> 
               <p>Followers: {user.followers.length} </p>
               <p>Following: {user.followeds.length} </p>
               <Button color='blue' onClick={() => props.history.push(`${props.match.path}${user.id}`)}>{`See ${user.username}\'s profile`}</Button> */}
              </div>
              </Card>
          )
           :
           <div>Loading</div>
        }
        </Card.Group>
        </div>
        </>
    )
}

export default PeopleCards