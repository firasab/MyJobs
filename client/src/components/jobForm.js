import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Job from './showJob/showJobForms';
import React from 'react'
import makeStyles from '../styles'

//design of jobs forms list 
const jobForm = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Job's Form's List </Typography>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid   item xs={12} sm={12}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
                            <Job />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default jobForm