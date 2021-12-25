import React,{ Fragment} from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Workers = () => {
    return (
        <Fragment>
            <ButtonGroup style={{  display: 'flex', backgroundColor:'white'}}>
            <Link to="/add_worker">
             <Button style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> Add worker </Button></Link>
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> Delete worker </Button>
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> Update worker </Button>
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> View worker </Button>
            </ButtonGroup>
        <div style={{display: 'flex',
         justifyContent:'center',
         alignItems:'center', 
         height: '90vh'}}>
            <h1>Here we will be able to manege the workers </h1>
        </div>

        </Fragment>
    )
}

export default Workers