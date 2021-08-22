import React from 'react'
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from '../components/signIn/signIn';
import SignUp from '../components/signUp/SignUp';
// import Home from '../modules/home/Home';
// import PrivateRoute from "./PrivateRouting";
import PublicRoute from "./PublicRouting";



export default function Navigation() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)


    return (
        <Router>
        <Header />
       
       
        <Switch>

         <Route exact path="/">
              <LandingPage />
          </Route>
          
          <PublicRoute path="/SignIn" auth={authState}>
              <SignIn />
          </PublicRoute>        

          <PublicRoute path="/SignUp " auth={authState} >
              <SignUp />
          </PublicRoute>

        {/* protected routes */}
    const authState = true;
          {/* <PrivateRoute path="/home" auth={authState}>
              <Home />
          </PrivateRoute>

          <PrivateRoute path="/profile" auth={authState}>
              <Profile />
          </PrivateRoute> */}


        </Switch>
         
  
        <Footer />
        </Router>
    )
}
