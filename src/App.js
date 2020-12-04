import React, { useEffect, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './layouts/Dashboard'
import { PrivateRoute, PublicRoute } from './components/RouteHOC'

function App() {
  const [loading, setLoading] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [tokens, setTokens] = useState(localStorage.getItem('token'))

  useEffect(() => {
    if (tokens) {
      setAuthenticated(true)
      localStorage.setItem('token', tokens)
      setLoading(false)
    } else {
      setAuthenticated(false)
      setLoading(false)
    }
  }, [tokens])

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/">
          {authenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Login setTokens={setTokens} />
          )}
        </Route>
        <PrivateRoute
          path="/dashboard"
          authenticated={authenticated}
          setTokens={setTokens}
          component={Dashboard}
        />
        <PublicRoute
          path="/login"
          authenticated={authenticated}
          setTokens={setTokens}
          component={Login}
        />
      </Switch>
    </Router>
  )
}

export default App
