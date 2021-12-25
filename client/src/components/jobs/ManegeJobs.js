import React, {Fragment} from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

const ManegeJobs = () => {
    return (
        <Fragment>
        <ButtonGroup style={{  display: 'flex', backgroundColor:'white'}}>
         <Button style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> Add Job </Button>
         <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> Delete Job </Button>
         <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> Edit Job </Button>
         <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
          margin: '10px 0px', cursor: 'pointer'}}> View Job </Button>
        </ButtonGroup>
        <div style={{display: 'flex',
         justifyContent:'center',
         alignItems:'center', 
         height: '90vh'}}>
            <h1>Here we will be able to manege the Jobs </h1>
        </div>
        </Fragment>
    )
}

export default ManegeJobs