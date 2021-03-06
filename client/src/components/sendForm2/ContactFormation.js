import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Sender from './ContactForm';
import React from 'react'
import makeStyles from '../../styles'

//send refused application mail design
const ContactFormation = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Job Application</Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid style= {{ marginLeft: '400px'}} item xs={12} sm={4}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
                            
                                    <Sender />
                                </AppBar>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default ContactFormation