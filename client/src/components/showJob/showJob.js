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
import SearchBar from "material-ui-search-bar";

export default function ShowJob() {
  const [jobsList, setJobsList] = useState([])
  const [rows, setRows] = useState(jobsList);
  const [searched, setSearched] = useState("");

  //delete job method
  const deleteJob = (id) => {
    axios.delete(`https://myjobss.herokuapp.com/jobs/${id}`).then (() => {
      alert('Job has beed deleted!');
      window.location.reload(false);
    })
  }

//get all jobs method
  useEffect(() => {
    axios.get('https://myjobss.herokuapp.com/jobs').then( (allJobs) => {
      setJobsList(allJobs.data);
      setRows(allJobs.data);

    } )
  }, [])



  const requestSearch = (searchedVal) => {

    if (searchedVal === "") {
      setJobsList(rows);
    }
    else {
      const filteredRows = rows.filter((job) => {
        return job.name.toLowerCase().includes(searchedVal.toLowerCase()); 
      });
      setJobsList(filteredRows);
    }
    
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  

    //the design of the table of the jobs list 
  return (
    <>
    <h2> Jobs's list </h2>
    <SearchBar
    style={{marginLeft: '900px' , borderRadius:'300px' , marginTop: '-40px'}}
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />

    <TableContainer style={{ marginTop: '10px'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Discription</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">Pay Per Hour</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right" >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobsList.map((job, key) => (
            <TableRow key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0  } }}
            >
              <TableCell component="th" scope="row">
                {job.name}
              </TableCell>
              <TableCell align="right">{job.discription}</TableCell>
              <TableCell align="right">{job.position}</TableCell>
              <TableCell align="right">{job.payPerHour}</TableCell>
              <TableCell align="right">{job.address}</TableCell>
              <TableCell align="right"  sx={{ minWidth: 200}}  > 
              <Button aria-label="delete" onClick={() => deleteJob(job._id)} style={{ marginLeft: "5px" }} ><DeleteIcon />  </Button> 
              <Button  as={Link} to={{pathname: `/jobEdition`,state: job}} style={{ marginLeft: "5px" }} ><EditIcon /> </Button>
              <Button  as={Link} to={{pathname: `/jobProfile`,state: job}}   style={{ marginLeft: "5px" }} ><AccountCircleIcon /> </Button> 
              
               </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
