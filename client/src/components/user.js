import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Admin from './showAdmin/showAdmin';
import React from 'react'
import makeStyles from '../styles'

//design of Admins list
const user = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg" >
                <AppBar className={classes.appBar}  position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Admin's list </Typography>
                </AppBar>
                

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid  item xs={12} sm={12}>
                            <AppBar className={classes.appBar} position="static" color="inherit" >
                             <Admin />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default user