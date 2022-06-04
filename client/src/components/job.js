import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Job from './showJob/showJob';
import React from 'react'
import makeStyles from '../styles'
import { Link} from 'react-router-dom'

//design of putting creating job and the jobs list in the samme page
const job = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Job's list </Typography>
                </AppBar>
                <AppBar className={classes.appBar} position="static" color="inherit">
                                <Link to={{pathname: `/jobCreation`}}  style={{ marginLeft: "5px" }} >Create New Job</Link>   
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

export default job