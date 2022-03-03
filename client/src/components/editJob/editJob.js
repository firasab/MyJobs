import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



//set the worker featuers
export default function EditJob() {
  const location = useLocation()
  const x = location.state;
  const [job, setJob] = useState({
    name:x.name,
    discription: x.discription,
    position: x.position,
    payPerHour: x.payPerHour,
    address: x.address
  });
  

      //post method to update worker to database
  const editJob = () => {
    axios.post(`https://myjobss.herokuapp.com/jobs/update/${x._id}`, job).then(() => {
      
      alert('Job has beed Updated!');
      window.location.replace('/job')
    })
  }



  //the design of the create worker funtion
  return (
    <>
    <h2>Edit job</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard" value={job.name} onChange={(event) => {
          setJob({ ...job, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="id" label="ID" variant="standard" value={job.discription} onChange={(event) => {
          setJob({ ...job, discription:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={job.position} onChange={(event) => {
          setJob({ ...job, position:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Phone number" variant="standard" value={job.payPerHour} onChange={(event) => {
          setJob({ ...job, payPerHour:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" value={job.address}  onChange={(event) => {
          setJob({ ...job, address:event.target.value })
        }}/>
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '50px'}}  onClick={() => editJob()}> Update Job </Button>
    </Box>
    </>
  );
}


