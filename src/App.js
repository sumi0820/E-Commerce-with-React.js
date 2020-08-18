import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Checkout from './components/Checkout'
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './components/Admin/Admin'
import Payment from './components/Payment'
import { useStateValue } from './store/StateProvider';

import { auth } from './fb/firebase'

function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      } else {
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      } 
    })
    return () => {
      unsubscribe();
    }
  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
          <Header user={user} />
      
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/admin">
            <Header />
            <Admin />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
