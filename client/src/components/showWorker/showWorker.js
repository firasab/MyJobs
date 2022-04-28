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

export default function ShowWorker() {
  const [workersList, setWorkerList] = useState([])
  const [rows, setRows] = useState(workersList);
  const [searched, setSearched] = useState("");

//delete method to delete worker from database
  const deleteWorker = (id) => {
    axios.delete(`https://myjobss.herokuapp.com/workers/${id}`).then (() => {
      alert('Worker has beed deleted!');
      window.location.reload(false);
    })
  }


//get method to get worker from database
  useEffect(() => {
    axios.get('https://myjobss.herokuapp.com/workers').then( (allWorkers) => {
      setWorkerList(allWorkers.data);
      setRows(allWorkers.data);
    } )
  }, [])



  const requestSearch = (searchedVal) => {
    console.log(searchedVal);
    
    const filteredRows = workersList.filter((worker) => {
      return worker.name.toLowerCase().includes(searchedVal.toLowerCase()); 
    });
    console.log(filteredRows);
    setWorkerList(filteredRows);

    if (searchedVal === "") {
      setWorkerList(rows);
    }
  
  };

  const cancelSearch = () => {
    setSearched("");
    setWorkerList(rows);
    //requestSearch(searched);
  };

 
  //the design of workers list
  return (
    <>
    <h2 style={{ marginTop: '20px'}}> Worker's list </h2>

    <SearchBar
    style={{marginLeft: '900px' , borderRadius:'300px' , marginTop: '-60px'}}
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />

    <TableContainer  style={{ marginTop: '10px'}} component={Paper}>
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
              <TableCell align="right">  
                                         <Button  variant="primary" aria-label="delete" onClick={() => deleteWorker(worker._id)} 
                                         style={{ marginLeft: "5px" }} > <DeleteIcon /> </Button>
                                         <Button  as={Link} to={{pathname: `/workerEdition`,state: worker}} 
                                         style={{ marginLeft: "5px" }} ><EditIcon /> </Button>
                                         <Button as={Link} to={{pathname: `/workerProfile`,state: worker }}  
                                         style={{ marginLeft: "5px" }} ><AccountCircleIcon /> </Button>

                                         </TableCell>
                                         
                                         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
