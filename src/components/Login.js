import React, { useState } from 'react';
import './style/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../fb/firebase';


const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const admin = "test@gmail.com"

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            if(auth && email === admin){
                history.push('/admin')
            }else if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://fontmeme.com/permalink/200813/1821cae8572017b21a5360f19f941813.png" alt="pixel-fonts" border="0" />
            </Link>
            <div className="login__container">
                <h1>Log In</h1>
                <form action="">
                    <h5>E-mail</h5>
                        <input type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <h5>Password</h5>
                        <input type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <button className="login__loginButton" onClick={login}>Login</button>
                </form>
                <Link to='/Signup'>
                     <button className="login__signupButton">Sign Up?</button>
                </Link>
                
            </div>
            
        </div>
    );
};

export default Login;