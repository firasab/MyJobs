import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import { Link} from 'react-router-dom'



export default function ViewComponent (props)  {
  

  //the showing job page component to be able to show the viwers the jobs each one is separated from the onther
  return (
    <>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
      <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Discription</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">PayPerHour</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Files</TableCell>

          </TableRow>
        </TableHead>
              <TableCell align="right">{props.name}</TableCell>
              <TableCell align="right">{props.discription}</TableCell>
              <TableCell align="right">{props.position}</TableCell>
              <TableCell align="right">{props.payPerHour}</TableCell>
              <TableCell align="right">{props.address}</TableCell> 
              <TableCell align="right">{props.jobImg }</TableCell>       
              <Link to={{pathname: `/jobFormCreation/`}}   style={{ marginLeft: "5px" }} ><ForwardToInboxIcon />Apply </Link>
          </Table>
          
          </TableContainer>
    </>
  );

  }