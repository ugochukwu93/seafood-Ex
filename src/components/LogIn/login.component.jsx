import React, { useState } from "react";
import {
  CssBaseline,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import "./login.styles.css"; 
import { makeStyles } from "@material-ui/core/styles";
import { Formik, ErrorMessage } from "formik";
const LogIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [Login, setLogin] = useState(initialState);
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((LoginDetails) => ({ ...LoginDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let loginData = Login;

    fetch(" http://8a139d948cb8.ngrok.io/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        console.log("this request was not successful");
      }
      console.log("successful");
    });
  };


  const classes = useStyles();
  const { email, password } = Login;
  return (
    <div style={{ marginTop: "30px" }}>
      <div>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Formik initialValues={Login}>
            {
              (formik) => {
                const{
                  values,
                  handleChange,
                  errors,
                  handleBlur,
                  touched,
                  isValid,
                  dirty
                } = formik

                return (
                  <div>
                    <form
                      className={classes.form}
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="login-form"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            className="login-form"
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        Log In
                      </Button>
                    </form>
                  </div>
                );
              }
            }
          </Formik>
          
        </div>
      </div>
    </div>
  );
};

export default LogIn;
