import React,{ Fragment} from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Workers = () => {
    return (
        <Fragment>
            <ButtonGroup style={{  display: 'flex', backgroundColor:'white'}}>
            <Link to="/add_worker" >
             <Button style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer', marginLeft: '750px'}}> Add worker </Button></Link>
            <Link to="/delete_worker">
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> Delete worker </Button>
              </Link>
            <Link to="/update_worker">
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> Update worker </Button></Link>
            <Link to="/workerList">
             <Button  style={{   backgroundColor: 'black', color: 'white' , fontSize: '20px', padding: '10px 60px',borderRadius: '5px',
              margin: '10px 0px', cursor: 'pointer'}}> View worker </Button></Link>
            </ButtonGroup>
            

        </Fragment>
    )
}

export default Workers