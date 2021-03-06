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
import {Button  } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function ShowJob() {
  const [jobFormsList, setJobFormsList] = useState([])
  //delete job forms method
  const deleteJobForm = (id) => {
    axios.delete(`https://myjobss.herokuapp.com/jobForms/${id}`).then (() => {
      alert('Job Application has beed deleted!');
      window.location.reload(false);
    })
  }

//get all jobs forms method
  useEffect(() => {
    axios.get('https://myjobss.herokuapp.com/jobForms').then( (allJobForms) => {
        setJobFormsList(allJobForms.data);

    } )
  }, [])

   


    //the design of the table of the jobs list 
  return (
    <>
    <h2> Form's list </h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Person Name</TableCell>
            <TableCell align="right">Job title</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Note</TableCell>
            <TableCell align="right" >Photo</TableCell>
            <TableCell align="right" >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobFormsList.map((jobForm, key) => (
            <TableRow key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {jobForm.name}
              </TableCell>
              <TableCell align="right">{jobForm.jobName}</TableCell>
              <TableCell align="right">{jobForm.id}</TableCell>
              <TableCell align="right">{jobForm.phone}</TableCell>
              <TableCell align="right">{jobForm.email}</TableCell>
              <TableCell align="right">{jobForm.address}</TableCell>
              <TableCell align="right" >{jobForm.description}</TableCell>
              <TableCell align="right">{<img type="file" alt="profile Pic" class='img-40 rounded-circle' onclick="window.open(this.jobForm.formImg, '_blank')" style= {{height: '100px', width: '100px',display:"flex" }} src={jobForm.formImg}></img>}</TableCell>
              <TableCell align="right" sx={{ minWidth: 200}}> 
              <Button  as={Link} to={{pathname: `/ContactFormation`,state: jobForm}}  style={{ marginLeft: "5px" }} ><ThumbUpAltIcon />  </Button> 
              <Button  as={Link} to={{pathname: `/ContactFormationRef`,state: jobForm}}  style={{ marginLeft: "5px" }} ><ThumbDownIcon />  </Button>  
              <Button aria-label="delete" onClick={() => deleteJobForm(jobForm._id)}  style={{ marginLeft: "5px"  }} ><DeleteIcon />  </Button>  
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}