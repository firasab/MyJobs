import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Show from './profileCompany';
import React from 'react'
import makeStyles from '../../styles'

//design of showing the companies 
const companyPr = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Company Profile </Typography>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid style= {{ marginLeft: '900px'}} item xs={12} sm={4}>
                                <Show />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default companyPr