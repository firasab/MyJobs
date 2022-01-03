import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import IconButton from '@material-ui/core/IconButton';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';


const openJob = () => {
  alert('opening The job Page');
  
}
export default function ViewComponent (props)  {

  return (
    <>
    <h2> View </h2>

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
      <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Discription</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">PayPerHour</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
              <TableCell align="right">{props.name}</TableCell>
              <TableCell align="right">{props.discription}</TableCell>
              <TableCell align="right">{props.position}</TableCell>
              <TableCell align="right">{props.payPerHour}</TableCell>
              <TableCell align="right">{props.address}</TableCell>
              <IconButton aria-label="edit" onClick={() => openJob()} style={{marginLeft: '50px'}}> <ForwardToInboxIcon />Apply</IconButton>  
          
          </Table>

          </TableContainer>
    </>
  );

  }