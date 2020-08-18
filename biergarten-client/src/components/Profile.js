import React from 'react'
import EditProfile from './EditProfile'
import Favorites from './Favorites'
import { Divider, Grid, Comment, Header, Segment, Image } from 'semantic-ui-react'

class Profile extends React.Component{

    state = {
        form: false
    }

    // fetchUser(){
    //     fetch(`http://localhost:3001/api/v1/users/${this.props.currentUser.id}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // }

    // componentDidMount(){
    //     this.fetchUser() 
    // }

    formHandler = () => {
        this.setState({
            form: !this.state.form
        })
    }

    render(){
      console.log(this.props.currentUser)
    return(
        <>
      <h1 className='profile-header'>{this.props.currentUser ? this.props.currentUser.username + '\'s ' + 'Profile Page' : 'Profile Page'}</h1>
    <Segment>
    <Grid columns={3} relaxed='very'>
      <Grid.Column width={6}>
        <Segment raised>
        
        <div className='profile-card' >
          <div class="ui card">
            <div class="image">
            {this.props.currentUser ?  <img src={this.props.currentUser.image}/> : "No User. Please Login" }
            </div>
            <div class="content">
            {this.props.currentUser ? <span class="header">{this.props.currentUser.username}</span> : "No User. Please Login"  }
            </div>
          </div>
          <div>
          <Comment.Group>
          <Header as='h3' dividing>
           My Reviews
          </Header>
          <Segment>
            {this.props.currentUser ? this.props.currentUser.reviews.map((review, key) => 

            <Comment>
            <Comment.Content>
              <Comment.Author>{review.beer}</Comment.Author>
              <Comment.Text>{review.content}</Comment.Text>
            </Comment.Content>
            </Comment>)
            :
            null
            }
            {/* <li>{review.beer} - {review.content}</li>)
            :
            null
            } */}
            </Segment>
            </Comment.Group>
        {/* <button onClick={this.formHandler}>Edit Information</button> */}
        </div><br/>

         <div>
             {this.state.form ? <EditProfile currentUser={this.props.currentUser} /> : null}
         </div>
        </div>
        </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment>
         {this.props.currentUser ? <Favorites currentUser={this.props.currentUser} /> : null}
         </Segment>
         </Grid.Column>
         <Grid.Column width={4}>
          <Segment raised>
            <div>
          {this.props.currentUser ? 
          <>
          <p>Following {this.props.currentUser.followeds.length} Users:</p>
          <p>{this.props.currentUser.followeds.map(followed => 
            // <li>{followed.username} <button onClick={() => this.props.history.push(`users/${followed.id}`)}>View Profile</button></li>)} </p>
            <Comment>
              <Image src={followed.image} size='small'/>
            <Comment.Content>
              <Comment.Author><a href={`/users/${followed.id}`}>{followed.username}</a></Comment.Author>
            </Comment.Content>
          </Comment>)}</p>
          <p> {this.props.currentUser.followers.length} Followers: </p>
          <p>{this.props.currentUser.followers.map(follower => 
            // <li>{follower.username} <button onClick={() => this.props.history.push(`users/${follower.id}`)}>View Profile</button></li>)} </p>
            <Comment>
              <Image src={follower.image} size='small'/>
            <Comment.Content>
              <Comment.Author><a href={`/users/${follower.id}`}>{follower.username}</a></Comment.Author>
            </Comment.Content>
          </Comment>)}</p>
          </>
          :
          null
        }
        </div>
         </Segment>
         </Grid.Column>
    </Grid>

    {/* <Divider vertical></Divider> */}
  </Segment>
        </>
    )
  }
}

export default Profile 