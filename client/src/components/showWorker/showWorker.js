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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ShowWorker() {
  const [workersList, setWorkerList] = useState([])

  const deleteWorker = (id) => {
    axios.delete(`http://localhost:9000/workers/${id}`).then (() => {
      alert('Worker has beed deleted!');
      window.location.reload(false);
    })
  }

  useEffect(() => {
    axios.get('http://localhost:9000/workers').then( (allWorkers) => {
      setWorkerList(allWorkers.data);

    } )
  }, [])
  return (
    <>
    <h2> Worker's list </h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Company</TableCell>
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
              <TableCell align="right">{worker.id}</TableCell>
              <TableCell align="right">{worker.location}</TableCell>
              <TableCell align="right">{worker.phoneNumber}</TableCell>
              <TableCell align="right">{worker.email}</TableCell>
              <TableCell align="right">{worker.companyName}</TableCell>
              <TableCell align="right">  <IconButton aria-label="delete" onClick={() => deleteWorker(worker._id)}> <DeleteIcon /> </IconButton> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}