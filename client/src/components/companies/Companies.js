import React, {Fragment} from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Companies = () => {
    return (
        <Fragment>
            <ButtonGroup style={{  display: 'flex', backgroundColor:'white'}}>
            <Link to="/add_company" >
             <Button style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer', marginLeft: '750px'}}> Add company </Button></Link>
            <Link to="/delete_company">
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> Delete company </Button>
              </Link>
            <Link to="/update_company">
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> Update company </Button></Link>
            <Link to="/companyList">
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> View company </Button></Link>
            </ButtonGroup>
        <div style={{display: 'flex',
         justifyContent:'center',
         alignItems:'center', 
         height: '90vh'}}>
            <h1>Here we will be able to manege the Companies </h1>
        </div>
        </Fragment>
    )
}

export default Companies