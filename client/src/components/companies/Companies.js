import React, {Fragment} from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const Companies = () => {
    return (
        <Fragment>
        <ButtonGroup style={{  display: 'flex', backgroundColor:'white'}}>
         <Button style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> Add Company </Button>
         <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> Delete Company </Button>
         <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> Edit Company </Button>
         <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> View Company </Button>
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