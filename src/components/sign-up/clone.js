<Formik
// userDetail={userDetails}
// validate={validate}
// onSubmit={handleSubmit}
>
  {(formik) => {
    const {
      values,
      handleSubmit,
      errors,
      touched,
      handleBlur,
      isValid,
      dirty,
    } = formik;
    console.log({ formik, values });
    const inputValue = getIn(values, fullName);
    return (
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="fullName"
              name="fullName"
              variant="outlined"
              required
              fullWidth
              id="fullName"
              value={values}
              label="FullName"
              onChange={handleChange}
              autoFocus
              className="form-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={values}
              onChange={handleChange}
              autoComplete="email"
              className="form-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="Phone number"
              name="phone"
              value={values}
              onChange={handleChange}
              autoComplete="phoneNumber"
              className="form-input"
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
              value={values}
              onChange={handleChange}
              autoComplete="current-password"
              className="form-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
              value={values}
              onChange={handleChange}
              autoComplete="current-password"
              className="form-input"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Are you an admin? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    );
  }}
</Formik>;
