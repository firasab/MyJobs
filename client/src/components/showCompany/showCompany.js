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

export default function ShowCompany() {
  const [companiesList, setCompaniesList] = useState([])

//delete method to delete company from database
  const deleteCompany = (id) => {
    axios.delete(`http://localhost:9000/companies/${id}`).then (() => {
      alert('Company has beed deleted!');
      window.location.reload(false);
    })
  }

//get method to get company from database
  useEffect(() => {
    axios.get('http://localhost:9000/companies').then( (allCompanies) => {
        setCompaniesList(allCompanies.data);

    } )
  }, [])

  const handleClick = (() => {

  })

  //the design of the table of the companies list 
  return (
    <>
    <h2> Companies's list </h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Field</TableCell>
            <TableCell align="right">Number of worker</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companiesList.map((company, key) => (
            <TableRow key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {company.name}
              </TableCell>
              <TableCell align="right">{company.field}</TableCell>
              <TableCell align="right">{company.numberOfWorker}</TableCell>
              <TableCell align="right">{company.address}</TableCell>
              <TableCell align="right">  
              <Link aria-label="delete" onClick={() => deleteCompany(company._id)} style={{ marginLeft: "5px" }} > <DeleteIcon /> </Link> 
              <Link to={{pathname: `/companyEdition`,state: company}} style={{ marginLeft: "5px" }} ><EditIcon /> </Link> 
              <Link to={{pathname: `/profileCompany/`,state: company._id,}}  onClick={() => handleClick(company._id)} style={{ marginLeft: "5px" }} ><AccountCircleIcon /> </Link> 
              
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
