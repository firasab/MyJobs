import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ThirtyFpsSelectIcon from '@mui/icons-material/ThirtyFpsSelect';
import DescriptionIcon from '@mui/icons-material/Description';

//set the job featuers
export default function CreateJobForm() {
  const [jobForm, setJobForm] = useState({
    name: '',
    jobName: '',
    id: '',
    phone: '',
    address: '',
    description: ''
   
  });
    //post method to add job to database
  const createJobForm = () => {
    axios.post('http://localhost:9000/jobForms', jobForm).then(() => {
      alert('Your Job Application has beed Sent!');
      window.location.replace('/view')
    })
    

  }
  //the design of the create job application
  return (
    <>
    <h2> Job Application</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="firstName" label="First Name" variant="standard" value={jobForm.name} onChange={(event) => {
          setJobForm({ ...jobForm, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <WorkIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="lastName" label="job Title " variant="standard" value={jobForm.jobName} onChange={(event) => {
          setJobForm({ ...jobForm, jobName:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ThirtyFpsSelectIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="ID" variant="standard" value={jobForm.id} onChange={(event) => {
          setJobForm({ ...jobForm, id:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Phone Number" variant="standard" value={jobForm.phone} onChange={(event) => {
          setJobForm({ ...jobForm, phone:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={jobForm.address}  onChange={(event) => {
          setJobForm({ ...jobForm, address:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <DescriptionIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="description" variant="standard" value={jobForm.description}  onChange={(event) => {
          setJobForm({ ...jobForm, description:event.target.value })
        }}/>
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '45px'}} onClick={createJobForm}> Apply for the Job </Button>
    </Box>
    </>
  );
}