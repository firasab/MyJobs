import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Schedule from './schedule/showSchedule';
import React from 'react'
import makeStyles from '../styles'

//design of putting creating worker and the workers list in the samme page
const schedule = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Schedule Creation  </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                    
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid  item xs={12} sm={12}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
                             <Schedule />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default schedule