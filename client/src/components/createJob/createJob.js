import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import RadarIcon from '@mui/icons-material/Radar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FeedIcon from '@mui/icons-material/Feed';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

//set the job featuers
export default function CreateJob() {
  const [job, setJob] = useState({
    name: '',
    discription: '',
    position: '',
    payPerHour: '',
    address: '',
    jobImg: ''
  });
    //post method to add job to database
  const createJob = () => {
    axios.post('https://myjobss.herokuapp.com/jobs', job).then(() => {
      alert('Job has beed added!');
      window.location.replace('/job')
    })
  }

  
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setJob( job => ({
      ...job,
      jobImg: base64
    }));
  

  
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  //the design of the create job funtion
  return (
    <>
    <h2>Create Job</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Company Name" variant="standard" value={job.name} onChange={(event) => {
          setJob({ ...job, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FeedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="discription" label="Discription" variant="standard" value={job.discription} onChange={(event) => {
          setJob({ ...job, discription:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <RadarIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Position" variant="standard" value={job.position} onChange={(event) => {
          setJob({ ...job, position:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PointOfSaleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Pay Per Hour" variant="standard" value={job.payPerHour} onChange={(event) => {
          setJob({ ...job, payPerHour:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={job.address} onChange={(event) => {
          setJob({ ...job, address:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <InsertPhotoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <input type="file" id="input"   onChange= {handleChange} multiple/>
        {/* <input type="file" accept="image/*"  /> */}
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '90px'}} onClick={createJob}> Create </Button>
    </Box>
    </>
  );
}
