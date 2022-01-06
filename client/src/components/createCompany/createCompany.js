import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import ApartmentIcon from '@mui/icons-material/Apartment';
import FeedIcon from '@mui/icons-material/Feed';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//set the company featuers
export default function CreateCompany() {
  const [company, setCompany] = useState({
    name: '',
    field: '',
    numberOfWorker: '',
    address: ''
  });
  //post method to add company to database
  const createCompany = () => {
    axios.post('http://localhost:9000/companies', company).then(() => {
      alert('Company has beed added!');
      window.location.reload(false);
    })
    

  }
  //the design of the create company funtion
  return (
    <>
    <h2>Create Company</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard" value={company.name} onChange={(event) => {
          setCompany({ ...company, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FeedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="field" label="Field" variant="standard" value={company.field} onChange={(event) => {
          setCompany({ ...company, field:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ConfirmationNumberIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Number Of Workers" variant="standard" value={company.numberOfWorker} onChange={(event) => {
          setCompany({ ...company, numberOfWorker:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={company.address}  onChange={(event) => {
          setCompany({ ...company, address:event.target.value })
        }}/>
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '90px'}} onClick={createCompany}> Create </Button>
    </Box>
    </>
  );
}
