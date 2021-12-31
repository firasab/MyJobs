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


export default function ViewJob() {
  const [jobsList, setJobsList] = useState([])



  useEffect(() => {
    axios.get('http://localhost:9000/jobs').then( (allJobs) => {
      setJobsList(allJobs.data);

    } )
  }, [])
  return (
    <>
    <h2> Jobs's list </h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Discription</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Pay Per Hour</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobsList.map((job, key) => (
            <TableRow key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {job.name}
              </TableCell>
              <TableCell align="right">{job.discription}</TableCell>
              <TableCell align="right">{job.position}</TableCell>
              <TableCell align="right">{job.payPerHour}</TableCell>
              <TableCell align="right">{job.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
