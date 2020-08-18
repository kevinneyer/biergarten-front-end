import React from 'react'
import EditProfile from './EditProfile'
import Favorites from './Favorites'
import {  Grid, Comment, Header, Segment, Image, Card, Feed , Icon} from 'semantic-ui-react'

class Profile extends React.Component{

    state = {
        form: false
    }

    formHandler = () => {
        this.setState({
            form: !this.state.form
        })
    }

    render(){
  
      return(
        <>
        <h1 className='profile-header'>{this.props.currentUser ? this.props.currentUser.username + '\'s ' + 'Profile Page' : 'Profile Page'}</h1>
          <Segment>
         
          <Grid columns={3} relaxed='very'>
            <Grid.Column width={6}>
              <Segment raised>
                  <Card>
                  {this.props.currentUser ?  <Image src={this.props.currentUser.image}/> : "No User. Please Login" }
                  {/* </div> */}
                  {/* <div class="content"> */}
                  <Card.Content >
                  {this.props.currentUser ? <Card.Header >{this.props.currentUser.username}</Card.Header> : "No User. Please Login"  }
                  </Card.Content>
                  <Card.Content extra>
                    {this.props.currentUser ? 
                    <>
                    <Icon name='user' />
                    <span>{this.props.currentUser.followers.length} followers</span>
                    </>
                    :
                    null
                    }
                  </Card.Content>
                  {/* </div> */}
                {/* </div> */}
                </Card>
                </Segment>
                
                {/* <div> */}

                <Header as='h3'>
                My Reviews
                </Header>
                <div class="ui divider"></div>

              <Segment raised>
                <Comment.Group>
                  {this.props.currentUser ? this.props.currentUser.reviews.map((review, key) => 
                  <Comment key={key}>
                    <Comment.Content>
                      <Image src={review.beer_img} size='mini'/>
                   <Comment.Author href={`/beers/${review.beer_id}`}>{review.beer}</Comment.Author>
                    <Comment.Text>{review.content}</Comment.Text>
                  </Comment.Content>
                  </Comment>)
                  :
                  null
                  }
                </Comment.Group>
              </Segment>
              {/* <button onClick={this.formHandler}>Edit Information</button> */}
              {/* </div><br/> */}
{/* 
              <div>
                  {this.state.form ? <EditProfile currentUser={this.props.currentUser} /> : null}
              </div> */}
              {/* </div> */}
              </Grid.Column>

              <Grid.Column >
                <Segment>
              {this.props.currentUser ? <Favorites currentUser={this.props.currentUser} /> : null}
              </Segment>
              </Grid.Column>

              {/* <Grid.Column width={4}>
                <Segment raised>
                  <div>
                {this.props.currentUser ? 
                <>
                <p>Following {this.props.currentUser.followeds.length} Users:</p>
                {this.props.currentUser.followeds.map(followed => 
                  // <li>{followed.username} <button onClick={() => this.props.history.push(`users/${followed.id}`)}>View Profile</button></li>)} </p>
                  <Comment>
                    <Image src={followed.image} size='small'/>
                  <Comment.Content>
                    <Comment.Author><a href={`/users/${followed.id}`}>{followed.username}</a></Comment.Author>
                  </Comment.Content>
                </Comment>)}
                <p> {this.props.currentUser.followers.length} Followers: </p>
                {this.props.currentUser.followers.map(follower => 
                  // <li>{follower.username} <button onClick={() => this.props.history.push(`users/${follower.id}`)}>View Profile</button></li>)} </p>
                  <Comment>
                    <Image src={follower.image} size='small'/>
                  <Comment.Content>
                    <Comment.Author><a href={`/users/${follower.id}`}>{follower.username}</a></Comment.Author>
                  </Comment.Content>
                </Comment>)}
                </>
                :
                null
              }
              </div>
              </Segment>
              </Grid.Column> */}
               <Grid.Column width={4}>
               <Header as='h3'>Following</Header>
              <Feed>
                
                {this.props.currentUser ? 
                this.props.currentUser.followeds.map(
                  followed =>
                  <Feed.Event>
                    <Feed.Label>
                      <Image src={followed.image} size='mini'/>
                    </Feed.Label>
                   <Feed.Content>
                      <Feed.Summary>
                         <Feed.User href={`/users/${followed.id}`}>{followed.username}</Feed.User>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                )
                 :
                 null
                }
               

              </Feed>
              
              </Grid.Column> 
          </Grid>

          {/* <Divider vertical></Divider> */}
        </Segment>
        </>
    )
  }
}

export default Profile 