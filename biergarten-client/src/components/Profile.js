import React from 'react'
import Favorites from './Favorites'
import {  Grid, Comment, Header, Segment, Image, Card, Feed , Rating, Icon} from 'semantic-ui-react'

class Profile extends React.Component{
  render(){
    return(
      <>
        <h1 className='profile-header'>{this.props.currentUser ? this.props.currentUser.username + '\'s Profile Page' : 'Profile Page'}</h1>
          <Segment>
            <Grid columns={3} relaxed='very'>
              <Grid.Column width={6}>
              <Segment raised>
                <Card centered>
                  {this.props.currentUser ?  <Image src={this.props.currentUser.image} size='medium'/> : "No User. Please Login" }
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

                </Card>
              </Segment>
              <Header as='h3'>My Reviews</Header>
                <div class="ui divider"></div>
              <Segment raised>
                <Comment.Group>
                  {this.props.currentUser ? this.props.currentUser.reviews.map((review, key) => 
                    <Comment key={key}>
                      <Comment.Content>
                        <Image src={review.beer_img} size='mini'/>
                        <Comment.Author href={`/beers/${review.beer_id}`}>{review.beer} <Rating defaultRating={review.rating} maxRating={review.rating} disabled /></Comment.Author>
                        <Comment.Text>{review.content}</Comment.Text>
                      </Comment.Content>
                  </Comment>
                  )
                  :
                  null
                  }
                </Comment.Group>
              </Segment>
            </Grid.Column>
            <Grid.Column >
                <Segment>
                  {this.props.currentUser ? <Favorites currentUser={this.props.currentUser} /> : null}
                </Segment>
            </Grid.Column>
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
        </Segment>  
      </>
    )
  }
}

export default Profile 