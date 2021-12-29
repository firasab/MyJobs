import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Job from './showJob/showJob';
import Create from './createJob/createJob';
import React from 'react'
import makeStyles from '../styles'



const job = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Job Create & Show </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid item xs={12} sm={7}>
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                    <Job />
                                </AppBar>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
                                    <Create />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default job