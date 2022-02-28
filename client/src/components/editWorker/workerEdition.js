import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Update from './editWorker';
import React from 'react'
import makeStyles from '../../styles'

//design of putting updating worker 
const workerEd = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Update Worker </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid style= {{ marginLeft: '400px'}} item xs={12} sm={4}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
                            
                                    <Update />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default workerEd