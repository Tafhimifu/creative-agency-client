import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import {  useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    
    const handle=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            const {displayName,email} = result.user;
            const signedInUser={displayName,email}
            setLoggedInUser(signedInUser);
            
            
            
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    
    return (
      <div className="login-section">
        <div className="login">
            <h3>Login with</h3>
            <button className="button" onClick={handle}>
              <span>
                <img src={require("../../images/icons/google.png")} style={{ maxWidth: "30px" }} alt="google logo" />
                </span>
                 <span>Continue with Google</span>
              </button>
        </div>
        </div>
    );
};

export default Login;
