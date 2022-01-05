import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Company from './showCompany/showCompany';
import Create from './createCompany/createCompany';
import React from 'react'
import makeStyles from '../styles'


//design of putting creating company and the companies list in the samme page
const company = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Company Create & Show </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid item xs={12} sm={12}>
                                <AppBar className={classes.appBar} position="static" color="inherit">
                                    <Company />
                                </AppBar>
                            </Grid>
                            <Grid style= {{ marginLeft: '400px'}}  item xs={12} sm={4}>
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

export default company