import React, { useContext, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // google sign in handle
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email } = result.user;
                const signedInUser = {
                    name: displayName,
                    email : email
                };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // log in using email and password
    const [newUser, setNewUser] = useState(true);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        successful: false,
    });

    const handleBlur = (event) => {
        let isFieldValid = true;
        console.log(event.target.name, event.target.value);
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            isFieldValid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/.test(
                event.target.value
            );
        }
        if (isFieldValid) {
            const newUser = { ...user };
            newUser[event.target.name] = event.target.value;
            setUser(newUser);
        }
    };

    const handleSubmit = (event) => {
        console.log(user);
        if (newUser && user.email && user.password) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(user.email, user.password)
                .then((response) => {
                    const newUser = { ...user };
                    newUser.error = '';
                    newUser.successful = true;
                    setUser(newUser);
                    updateUserName(user.name);
                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.error = error.message;
                    newUser.successful = false;
                    setUser(newUser);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    const newUser = {...result.user };
                    newUser.error = '';
                    newUser.successful = true;
                    setUser(newUser);
                    setLoggedInUser(newUser);
                    history.replace(from);
                    console.log(result.user);
                })
                .catch((error) => {
                    const newUser = { ...user };
                    newUser.error = error.message;
                    newUser.successful = false;
                    setUser(newUser);
                });
        }
        event.preventDefault();
    };

    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        })
            .then(function () {
                console.log('username updated successfully.');
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className='text-center mt-5'>
            <h3>{newUser ? 'Create an account' : 'Login'}</h3>
            <p className='text-danger'>{user.error}</p>
            <form onSubmit={handleSubmit}>
                {newUser && (
                    <input
                        type='text' name='name' onBlur={handleBlur}
                        placeholder='Name' required
                    />
                )}
                <br />
                <input
                    type='email' name='email' onBlur={handleBlur}placeholder='Enter Email' required/>
                <br />
                <input
                    type='password' name='password' onBlur={handleBlur}
                    placeholder='Password' required/>
                <br />
                {newUser && (
                    <input
                        type='password'
                        name='confirmPassword' onBlur={handleBlur}
                        placeholder='Confirm Password' required />
                )}
                <br />
                {!newUser && (
                    <div className='form-group form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'/>
                        <label className='form-check-label' for='exampleCheck1'>
                            Check Me
                        </label>
                    </div>
                )}
                <br />
                <input
                    type='submit'
                    value={newUser ? 'Create an account' : 'Login'}
                />
            </form>
            <p>
                {newUser
                    ? 'Already have an account?': "Don't have an account?"}{' '}
                <span
                    className='text-danger'
                    onClick={() => setNewUser(!newUser)}
                    style = {{cursor: 'pointer' }}
                >
                    {newUser ? 'Login' : 'Create an account'}
                </span>{' '}
            </p>

            {user.successful && (
                <p className='text-success'>
                    Account {newUser ? 'created' : 'logged in'} successfully.
                </p>
            )}
            <p className = 'or-style'>Or</p>
                <div className = 'googleButton'>
                <button  onClick={handleGoogleSignIn}>
                <FontAwesomeIcon className = 'google-icon' icon={faGoogle} />&nbsp;&nbsp;Continue with Google</button>
                </div>
        </div>
    );
};
export default Login;
