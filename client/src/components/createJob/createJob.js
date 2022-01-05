import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

//set the job featuers
export default function CreateJob() {
  const [job, setJob] = useState({
    name: '',
    discription: '',
    position: '',
    payPerHour: '',
    address: ''
  });
    //post method to add job to database
  const createJob = () => {
    axios.post('http://localhost:9000/jobs', job).then(() => {
      alert('Job has beed added!');
      window.location.reload(false);
    })
    

  }
  //the design of the create job funtion
  return (
    <>
    <h2>Create Job</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Company Name" variant="standard" value={job.name} onChange={(event) => {
          setJob({ ...job, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="discription" label="Discription" variant="standard" value={job.discription} onChange={(event) => {
          setJob({ ...job, discription:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Position" variant="standard" value={job.position} onChange={(event) => {
          setJob({ ...job, position:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Pay Per Hour" variant="standard" value={job.payPerHour} onChange={(event) => {
          setJob({ ...job, payPerHour:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={job.address}  onChange={(event) => {
          setJob({ ...job, address:event.target.value })
        }}/>
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '90px'}} onClick={createJob}> Create </Button>
    </Box>
    </>
  );
}
