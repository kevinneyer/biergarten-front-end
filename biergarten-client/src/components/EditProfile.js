import React from 'react'

class EditProfile extends React.Component {

    state = {
        username: this.props.currentUser.username,
        email: this.props.currentUser.email,
        zipcode: this.props.currentUser.zipcode
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
      e.preventDefault();
      console.log("yes")
      const {username, email, zipcode} = this.state
      fetch(`http://localhost:3001/api/v1/users/${this.props.currentUser.id}`, {
          method: "PATCH",
          headers: {
              'content-type': 'application/json',
              accept: 'application/json',
            //   "Authorization": localStorage.token
          },
          body: JSON.stringify({
              username,
              email,
              zipcode
          })
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
    }

    render(){
        return(
            <div>
             <form onSubmit={this.submitHandler} className='edit-form'>
                 <label className='edit-form'>Username: </label>
                 <input onChange={this.changeHandler} type="text" name='username'value={this.state.username} /><br></br>
                 <label className='edit-form'>Email: </label>
                 <input onChange={this.changeHandler} type="text" name='email' value={this.state.email} /><br></br>
                 <label className='edit-form' >Zipcode: </label>
                 <input onChange={this.changeHandler} type="text" name='zipcode' value={this.state.zipcode} /><br></br>
                 <button>Edit Profile</button>
             </form>
            </div>
        )
    }
}

export default EditProfile