import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Worker from './showWorker/workerHours';
import React from 'react'
import makeStyles from '../styles'


//design of putting creating worker and the workers list in the samme page
const worker = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg" >
                <AppBar className={classes.appBar}  position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Worker's Monthly Hours </Typography>
                </AppBar>
             
                

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid  item xs={12} sm={12}>
                            <AppBar className={classes.appBar} position="static" color="inherit" >
                             <Worker />
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