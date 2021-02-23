import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState ={
  name: '',
  age: '',
  email: '',
}

export default function FriendsForm( props ){

  const history = useHistory();

  const [ friend, setFriend ] = useState( initialState )

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  const sendFriend = e =>{
    e.preventDefault();

    axiosWithAuth()
      .post( '/api/friends/', friend )
      .then( res => {
        window.location.reload(false);
      })
      .catch( err => console.log( err ) );

  }
  return(
    <div>
        <form onSubmit={ sendFriend }>
          <input type="text" name="name" placeholder="Name" value={ friend.name } onChange={ handleChange } />
          <input type="number" min="1" max="99" name="age" placeholder="Age" value={ friend.age } onChange={ handleChange } />
          <input type="text" name="email" placeholder="Email" value={ friend.email } onChange={ handleChange } />
          <button>Add Friend</button>
        </form>
    </div>

  );
}