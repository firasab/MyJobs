import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NfcIcon from '@mui/icons-material/Nfc';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

//set the worker featuers
export default function EditCompany() {
  const location = useLocation()
  const x = location.state;
  const [company, setCompany] = useState({
    name:x.name,
    field: x.field,
    numberOfWorker: x.numberOfWorker,
    address: x.address
  });
  

      //post method to update worker to database
  const editCompany = () => {
    console.log(company)
    axios.post(`https://myjobss.herokuapp.com/companies/update/${x._id}`, company).then(() => {
      
      alert('Worker has beed Updated!');
      window.location.replace('/company')
    })
  }



  //the design of the create worker funtion
  return (
    <>
    <h2>Edit company</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard" value={company.name} onChange={(event) => {
          setCompany({ ...company, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <NfcIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="id" label="Field" variant="standard" value={company.field} onChange={(event) => {
          setCompany({ ...company, field:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FormatListNumberedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Number of workers" variant="standard" value={company.numberOfWorker} onChange={(event) => {
          setCompany({ ...company, numberOfWorker:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={company.address} onChange={(event) => {
          setCompany({ ...company, address:event.target.value })
        }}/>
      </Box>
     
      <Button variant="contained" color="success"  style= {{ marginLeft: '50px'}}  onClick={() => editCompany()}> Update Company </Button>
    </Box>
    </>
  );
}


