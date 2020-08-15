import React from 'react'
import EditProfile from './EditProfile'
import Favorites from './Favorites'
// import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { Divider, Grid, Comment, Header, Segment } from 'semantic-ui-react'

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
    <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <h1 className='profile-header'>{this.props.currentUser ? this.props.currentUser.username + '\'s ' + 'Profile Page' : 'Profile Page'}</h1>
        <div className='profile-card' >
          <div class="ui card">
            <div class="image">
            {this.props.currentUser ?  <img src="https://semantic-ui.com/images/avatar2/large/kristy.png"/> : "No User. Please Login" }
            </div>
            <div class="content">
            {this.props.currentUser ? <a class="header">{this.props.currentUser.username}</a> : "No User. Please Login"  }
            </div>
          </div>
          <div>
          <Comment.Group>
          <Header as='h3' dividing>
           My Reviews
          </Header>
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
            </Comment.Group>
        <button onClick={this.formHandler}>Edit Information</button>
        </div><br/>
        <div>
          {this.props.currentUser ? 
          <>
          <p>Following {this.props.currentUser.followeds.length} Users:</p>
          <p>{this.props.currentUser.followeds.map(followed => 
            <li>{followed.username} <button onClick={() => this.props.history.push(`users/${followed.id}`)}>View Profile</button></li>)} </p>
          <p> {this.props.currentUser.followers.length} Followers: </p>
          <p>{this.props.currentUser.followeds.map(follower => 
            <li>{follower.username} <button onClick={() => this.props.history.push(`users/${follower.id}`)}>View Profile</button></li>)} </p>
          </>
          :
          null
        }
        </div>
         <div>
             {this.state.form ? <EditProfile currentUser={this.props.currentUser} /> : null}
         </div>
        </div>
        </Grid.Column>
        <Grid.Column>
         {this.props.currentUser ? <Favorites currentUser={this.props.currentUser} /> : null}
         </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
        </>
    )
  }
}

export default Profile 