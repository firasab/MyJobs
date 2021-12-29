import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Worker from './showWorker/showWorker';
import Create from './createWorker/createWorker';
import React from 'react'
import makeStyles from '../styles'



const worker = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Worker Create & Show </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid item xs={12} sm={7}>
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                    <Worker />
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

export default worker