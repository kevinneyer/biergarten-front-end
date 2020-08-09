import React from 'react'

const Profile = (props) => {
    return(
        <div>
            {props.currentUser ? props.currentUser.username + '\'s ' + 'Profile Page' : 'Profile Page'}
        </div>
    )
}

export default Profile 