import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';


//set the worker featuers
export default function EditWorker() {
  const [worker, setWorker] = useState({
    name: '',
    id: '',
    location: '',
    phoneNumber: '',
    email: ''
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////
      //post method to add worker to database
  const editWorker = () => {
    axios.post('http://localhost:9000/workers', worker).then(() => {
      alert('Worker has beed added!');
      window.location.replace('/worker')
    })
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////


  //the design of the create worker funtion
  return (
    <>
    <h2>Edit worker</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard" value={worker.name} onChange={(event) => {
          setWorker({ ...worker, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="id" label="ID" variant="standard" value={worker.id} onChange={(event) => {
          setWorker({ ...worker, id:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={worker.location} onChange={(event) => {
          setWorker({ ...worker, location:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Phone number" variant="standard" value={worker.phoneNumber} onChange={(event) => {
          setWorker({ ...worker, phoneNumber:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" value={worker.email}  onChange={(event) => {
          setWorker({ ...worker, email:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Company name" variant="standard" value={worker.companyName}  onChange={(event) => {
          setWorker({ ...worker, companyName:event.target.value })
        }}/>
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '50px'}} onClick={editWorker}> Update Worker </Button>
    </Box>
    </>
  );
}


