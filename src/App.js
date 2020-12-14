import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import {useDispatch} from 'react-redux'

import { getImages } from './actions/images'
import "./App.css";
import useStyles from "./styles";
import { Form } from "./components/Form/Form";
import Images from "./components/Images/Images";



function App() {
  const classes = useStyles();
  const dispatch = useDispatch();


  useEffect(() => {
    const images = dispatch(getImages()) // must use
  })
  return (
    <div className="App">
    {/* {console.log(images)} */}
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Typography variant="h2" align="center" className={classes.heading}>
            Sharing Images
            <img
            className={classes.image}
            src="download.ico"
            alt="icon"
            height="35"
          />
          <img
            className={classes.image}
            src="favicon.ico"
            alt="icon"
            height="35"
          />
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Images />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
