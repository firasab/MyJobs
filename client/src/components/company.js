import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Company from './showCompany/showCompany';
import React from 'react'
import makeStyles from '../styles'
import { Link} from 'react-router-dom'

//design of putting creating company and the companies list in the samme page
const company = () => {
    const classes = makeStyles();
    return (
        <div >
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center"> Companie's list </Typography>
                </AppBar>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Link to={{pathname: `/companyCreation`}}  style={{ marginLeft: "5px" }} >Create New Copmany</Link>
                </AppBar>

                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch">
                            <Grid  item xs={12} sm={12}>
                            <AppBar className={classes.appBar} position="static" color="inherit">
                           
                            <Company />
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