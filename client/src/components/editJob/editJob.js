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
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default function EditJob() {
  const location = useLocation()
  const edt = location.state;
  const [job, setJob] = useState({
    name:edt.name,
    discription: edt.discription,
    position: edt.position,
    payPerHour: edt.payPerHour,
    address: edt.address
  });
  

     
  const editJob = () => {
    axios.post(`https://myjobss.herokuapp.com/jobs/update/${edt._id}`, job).then(() => {
      
      alert('Job has beed Updated!');
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
  
   console.log(base64)
  
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


 
  return (
    <>
    <h2>Edit job</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard" value={job.name} onChange={(event) => {
          setJob({ ...job, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <NfcIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="id" label="Field" variant="standard" value={job.discription} onChange={(event) => {
          setJob({ ...job, discription:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <FormatListNumberedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Number of workers" variant="standard" value={job.position} onChange={(event) => {
          setJob({ ...job, position:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard" value={job.payPerHour} onChange={(event) => {
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
        <input type="file" accept="image/*"   onChange= {handleChange} />
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '50px'}}  onClick={() => editJob()}> Update Job </Button>
    </Box>
    </>
  );
}


