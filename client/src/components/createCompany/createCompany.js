import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';


export default function CreateCompany() {
  const [company, setCompany] = useState({
    name: '',
    field: '',
    numberOfWorker: '',
    address: ''
  });
  
  const createCompany = () => {
    axios.post('http://localhost:9000/companies', company).then(() => {
      alert('Company has beed added!');
      window.location.reload(false);
    })
    

  }
  return (
    <>
    <h2>Create Company</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard" value={company.name} onChange={(event) => {
          setCompany({ ...company, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="field" label="Field" variant="standard" value={company.field} onChange={(event) => {
          setCompany({ ...company, field:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Number Of Workers" variant="standard" value={company.numberOfWorker} onChange={(event) => {
          setCompany({ ...company, numberOfWorker:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={company.address}  onChange={(event) => {
          setCompany({ ...company, address:event.target.value })
        }}/>
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '90px'}} onClick={createCompany}> Create </Button>
    </Box>
    </>
  );
}
