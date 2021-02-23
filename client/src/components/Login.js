import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component{
    state = {
        creds: {
            username: '',
            password: '',
        },
        error: '',
    }

    handleChange = e => {
        this.setState( {
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            },
            error: '',
        })
    }

    login = e => {
        e.preventDefault();

        axiosWithAuth()
            .post( '/api/login', this.state.creds )

            .then( res => {
                localStorage.setItem( 'token', JSON.stringify( res.data.payload ) )
                this.props.history.push( "/friends" );
            })
            .catch( err => this.setState( { error: err.response.data.error } ) );
    }

    render() {
        return(
            <div>
                <form onSubmit={ this.login }>
                    <input type="text" name="username" value={ this.state.creds.username } onChange={ this.handleChange }/>
                    <input type="password" name="password" value={ this.state.creds.pasword } onChange={ this.handleChange }/>
                    <p style={ {color: 'red', fontSize: '16px' } }>{ this.state.error }</p>
                    <button>Login</button>
                </form>
            </div>
        )
    }

}
export default Login;