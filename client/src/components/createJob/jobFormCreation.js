import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Create from './createJobForm';
import React from 'react'
import makeStyles from '../../styles'


//design of putting creating jobForm 
const jobForm = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Please fill the following fields</Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '50vh' }}>
                            <Grid style= {{ marginLeft: 'center'}}  item xs={12} sm={4}>
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

export default jobForm