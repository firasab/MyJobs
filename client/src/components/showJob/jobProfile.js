import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Show from './profileJob';
import React from 'react'
import makeStyles from '../../styles'

//design of putting updating worker 
const jobPr = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Job Profile </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid style= {{ marginLeft: '900px'}} item xs={12} sm={4}>
                                <Show />
                            </Grid>
                            <Grid style= {{ marginLeft: '0px'}} item xs={7} sm={3}>
                            <img  style= {{ marginTop: '-900px' , height: '500px', width: '500px' }} src={"https://pic.onlinewebfonts.com/svg/img_364496.png"}></img>
                            
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default jobPr