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
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link} from 'react-router-dom'
import {Button  } from 'react-bootstrap'


export default function ShowAdmin() {
  const [adminsList, setAdminList] = useState([])


//delete method to delete worker from database
  const deleteAdmin = (id) => {
    axios.delete(`https://myjobss.herokuapp.com/users/${id}`).then (() => {
      alert('Admin has beed deleted!');
      window.location.reload(false);
    })
  }


//get method to get worker from database
  useEffect(() => {
    axios.get('https://myjobss.herokuapp.com/users').then( (allAdmins) => {
        setAdminList(allAdmins.data);

    } )
  }, [])

 
  //the design of workers list
  return (
    <>
    <h2> Admins's list </h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminsList.map((admin, key) => (
            <TableRow key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {admin.name}
              </TableCell>
              <TableCell align="right">{admin.email}</TableCell>
              <TableCell align="right">{admin.password}</TableCell>

              <TableCell align="right">  
                                         <Button  variant="primary" aria-label="delete" onClick={() => deleteWorker(admin._id)} 
                                         style={{ marginLeft: "5px" }} > <DeleteIcon /> </Button>
                                         <Button  as={Link} to={{pathname: `/workerEdition`,state: admin}} 
                                         style={{ marginLeft: "5px" }} ><EditIcon /> </Button>
                                         </TableCell>
                                         
                                         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
