import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState , useEffect } from 'react';
import { Link} from 'react-router-dom'
import {Button  } from 'react-bootstrap'
import AddIcon from '@mui/icons-material/Add';

export default function ShowWorker() {
  const [workersList, setWorkerList] = useState([])




//get method to get worker schedule from database
  useEffect(() => {
    axios.get('https://myjobss.herokuapp.com/workers').then( (allWorkers) => {
      setWorkerList(allWorkers.data);

    } )
  }, [])

 
  //the design of workers schedule list
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Sunday</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workersList.map((worker, key) => (
            <TableRow key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {worker.name}
              </TableCell>
              <TableCell align="right">{worker.isWorkingSun} <br></br> {worker.timeWorkingSun}</TableCell>
              <TableCell align="right">{worker.isWorkingMon}<br></br> {worker.timeWorkingMon}</TableCell>
              <TableCell align="right">{worker.isWorkingTues} <br></br>{worker.timeWorkingTues}</TableCell>
              <TableCell align="right">{worker.isWorkingWed} <br></br>{worker.timeWorkingWed}</TableCell>
              <TableCell align="right">{worker.isWorkingThur} <br></br>{worker.timeWorkingThur}</TableCell>
              <TableCell align="right">{worker.isWorkingFri} <br></br>{worker.timeWorkingFri}</TableCell>
              <TableCell align="right">{worker.isWorkingSat} <br></br>{worker.timeWorkingSat}</TableCell>
              <TableCell align="right">  
                                        
                 <Button  as={Link} to={{pathname: `/scheduleEdition`,state: worker}} 
                  style={{ marginLeft: "5px" }} ><AddIcon /> </Button></TableCell>
                                         
                                         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
