import React from 'react';
import './style/Header.css'
import {  Link, useHistory  } from 'react-router-dom'
import { useStateValue } from '../store/StateProvider';
import {auth} from '../fb/firebase'


const Header = () => {
    const [{ cart, user, email }, dispatch] = useStateValue();
    const history = useHistory();
    const admin = "test@gmail.com"

    const logout = () => {
        auth.signOut()
        .then(
            history.push('/login')
        )
    }


    return (
        <nav className="header">

        <Link to="/">
            <img className="header__logo" src="https://fontmeme.com/permalink/200813/1821cae8572017b21a5360f19f941813.png" alt="pixel-fonts" border="0" />
        </Link>

        <div className="header__nav">
            <div className="header__link">
                {!user ? (
                    <Link to='/login'>
                        <span className="header__lineOne">Sign In</span>
                    </Link>
                ) : (
                    <div className="header__loggedin">
                        <Link to='/login'>
                            <span className="header__lineOne">Hello, {user.displayName}</span>
                        </Link>
                        <div className="header__link">
                            <Link to='/checkout'>
                                <div className="header__option">
                                    <span className="header__lineOne">CART:</span>
                                    <span className="header__lineTwo">{cart.length}</span>
                                </div>
                            </Link>
                        </div>
                        <div className="header__logout">
                            <button onClick={logout}>Log out</button>
                        </div>
                        <div className="header__admin">
                            {user.email === admin ? (
                                <div>
                                    <Link to='admin'><p className="header__adminPortal">Admin Portal</p></Link>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                )}
            </div>




        </div>
        </nav>
    );
};

export default Header;

// logo
// search
{/* <input type="text" className="header__searchInput"/> */}

// 3links
//cart