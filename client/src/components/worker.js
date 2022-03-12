import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Worker from './showWorker/showWorker';
import React from 'react'
import makeStyles from '../styles'
import { Link} from 'react-router-dom'

//design of putting creating worker and the workers list in the samme page
const worker = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Worker Creation & Show </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                    
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid item style= {{ marginLeft: '400px'}} xs={12} sm={4}>
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                <Link to={{pathname: `/workerCreation`}}  style={{ marginLeft: "5px" }} >Create New Wokrer</Link>
                                </AppBar>
                            </Grid>
                            <Grid  item xs={12} sm={12}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
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