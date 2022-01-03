import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import View from './showJob/viewJob';
import React from 'react'
import makeStyles from '../styles'



const view = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Welcome to MyJobs website!</Typography>
                </AppBar>
                <Grow in>
                    <Container style={{ display: "flex", justifyContent:"space-around"}}>
                            <Grid item xs={12} sm={12} >
                               
                                    <View />
                                   
                                
                            
                             
                            </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default view