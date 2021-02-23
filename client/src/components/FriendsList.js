import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendsForm from './FriendsForm';

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount(){
    this.fetchFriends();
  }

  fetchFriends = () => {
    axiosWithAuth()
      .get( '/api/friends' )
      .then( res => {
        this.setState( {
          friends: res.data
        })
      })
      .catch( err => console.log( err ) );
  }

  render() {
    return (
      <div>
        <FriendsForm />
        <div className="friends-container">
          <h2>Friends List</h2>
          { this.state.friends.map( friend => {
            return <ul className="friends-list">
                  <li><span>Name:</span> { friend.name } </li> 
                  <li><span>Age:</span> { friend.age } </li> 
                  <li><span>Email:</span> { friend.email }</li>
              </ul>
          })}
        </div>
      </div>
    )
  }
}

export default FriendsList;