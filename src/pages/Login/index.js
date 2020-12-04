import React, { useState } from 'react'
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  CircularProgress,
  makeStyles,
} from '@material-ui/core'
import { useForm } from '../../hooks/useForm'
import { SITE_URL } from '../../Utils/utils'
import Slider from '../../components/Slider'

import axios from 'axios'

import 'react-awesome-slider/dist/styles.css'
import logo from '../../assets/images/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  slider: {
    display: 'flex',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: 'red',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

function Login(props) {
  const classes = useStyles()
  const [values, handleChange] = useForm({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [helperText, setHelperText] = useState('')

  // const config = {
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (values.username && values.password) {
      setLoading(true)
      axios
        .post(SITE_URL + '/wp-json/api/v1/token', {
          username: values.username,
          password: values.password,
        })
        .then((response) => {
          setLoading(false)
          setHelperText('')
          props.setTokens(response.data.jwt_token)
        })
        .catch((err) => {
          setLoading(false)
          setHelperText('')
          console.log(err)
        })
    } else {
      setHelperText('Please fill this field')
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.slider}>
        <Slider />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Box mb={6}>
            <img src={logo} width={400} alt="logo" />
          </Box>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              autoComplete="username"
              value={values.username}
              onChange={handleChange}
              helperText={helperText}
              error={helperText ? true : false}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              helperText={helperText}
              value={values.password}
              onChange={handleChange}
              error={helperText ? true : false}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div className={classes.wrapper}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading}
                // endIcon={loading?<CircularProgress color="secondary" size="medium" />:""}
              >
                Sign In
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  className={classes.buttonProgress}
                />
              )}
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default Login
