import React, { Component, useEffect, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  console.log(authenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  )
}

function App() {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState('')

  useEffect(() => {
    if (user) {
      setAuthenticated(true)
      setLoading(false)
    } else {
      setAuthenticated(false)
      setLoading(false)
    }
  }, [])
  return loading === true ? (
    <h2>Loading...</h2>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute
          path="/dashboard"
          authenticated={authenticated}
          component={Dashboard}
        />
        <PublicRoute
          path="/login"
          authenticated={authenticated}
          component={Login}
        />
      </Switch>
    </Router>
  )
}

export default App
