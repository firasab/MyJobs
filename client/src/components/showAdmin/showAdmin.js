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
import SearchBar from "material-ui-search-bar";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export default function ShowAdmin() {
  const [adminsList, setAdminsList] = useState([])
  const [rows, setRows] = useState(adminsList);
  const [searched, setSearched] = useState("");

//delete method to delete worker from database
  const deleteWorker = (id) => {
    axios.delete(`https://myjobss.herokuapp.com/api/users/${id}`).then (() => {
      alert('Worker has beed deleted!');
      window.location.reload(false);
    })
  }


//get method to get admin from database
  useEffect(() => {
    axios.get('https://myjobss.herokuapp.com/api/users').then( (allWorkers) => {
      setAdminsList(allWorkers.data);
      setRows(allWorkers.data);
    } )
  }, [])


//search bar
  const requestSearch = (searchedVal) => {

    if (searchedVal === "") {
      setAdminsList(rows);
    }
    else {
      const filteredRows = rows.filter((worker) => {
        return ( 
         worker.name.toLowerCase().includes(searchedVal.toLowerCase())  
         || worker.email.toLowerCase().includes(searchedVal.toLowerCase())   ) ; 
        
      });
      setAdminsList(filteredRows);
    }
    
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

 
  //the design of workers list
  return (
    <>
    <h2 style={{ marginTop: '70px'}}> </h2>

    <div style={{marginRight: 'auto' , marginTop: '-20px'  }}>
    <ReactHTMLTableToExcel   
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="Workers"
        sheet="tablexls"
        buttonText="Download as Execl"  
        
      />
      </div>
     
   
    <SearchBar
    style={{marginLeft: 'auto' , borderRadius:'300px' , marginTop: '-60px' , backgroundColor:"#DADADA", width: '130px'  }}
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
 
    <TableContainer  style={{ marginTop: '20px'}} component={Paper}>
      <Table id="table-to-xls" sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminsList.map((worker, key) => (
            <TableRow key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {worker.name}
              </TableCell>
              <TableCell align="right">{worker.email}</TableCell>
              <TableCell align="right" style={{ width: "200px" }}>  
                                         <Button  variant="primary" aria-label="delete" onClick={() => deleteWorker(worker._id)} 
                                         style={{ marginLeft: "5px" }} > <DeleteIcon /> </Button>
                                         </TableCell>
                                         
                                         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
