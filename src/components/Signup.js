import React, { useState }from 'react';
import './style/Signup.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../store/StateProvider';
import { auth } from '../fb/firebase';



const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const history = useHistory();


    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: username
          })
        })
        .catch((error) => alert(error.message))
        .then((auth) => {
            history.push('/');
        })
      }


    return (
        <div className="signup">
            <Link to='/'>
                <img className="signup__logo" src="https://fontmeme.com/permalink/200813/1821cae8572017b21a5360f19f941813.png" alt="pixel-fonts" border="0" />
            </Link>
            <div className="signup__container">
            <h1>Sign Up</h1>
            <form className="signup__form">
            <h5>User name</h5>
                <input
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            <h5>E-mail</h5>

                <input
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            <h5>Password</h5>
                <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="signup__signupButton" type="submit" onClick={signUp}>Sign Up</button>
            </form>
            </div>
        </div>
    );
};

export default Signup;


