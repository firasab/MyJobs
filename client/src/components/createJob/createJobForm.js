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
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmailIcon from '@mui/icons-material/Email';

//set the job featuers
export default function CreateJobForm() {
  const [jobForm, setJobForm] = useState({
    name: '',
    jobName: '',
    id: '',
    phone: '',
    address: '',
    description: '',
    formImg: '',
    email: ''
   
  });
    //post method to add job to database
  const createJobForm = () => {
    if (!jobForm.name ) {
      alert("please add your name!")      
    }
    else  if ( !jobForm.jobName) {
      alert("please add the Job name you are interested in!")      
    }
    else  if ( !jobForm.id ) {
      alert("please add your ID!")      
    }
    else  if ( !jobForm.phone ) {
      alert("please add your Phone Number!")      
    }
    else  if ( !jobForm.address ) {
      alert("please add your address!")      
    }
    else  if ( !jobForm.email) {
      alert("please add your email!")      
    }
    else  if ( !jobForm.description ) {
      alert("please tell us about you alittle!")      
    }
    else  if ( !jobForm.formImg ) {
      alert("please add your photo!")      
    }
  
    else{
    axios.post('https://myjobss.herokuapp.com/jobForms', jobForm).then(() => {
      alert('Your Job Application has beed Sent!');
      window.location.replace('/view')
    })
  }
    

  }

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setJobForm( jobForm => ({
      ...jobForm,
      formImg: base64
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

  



  //the design of the create job application
  return (
    <>
    <h2> Job Application</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="Full Name" label="Full Name" variant="standard" value={jobForm.name} onChange={(event) => {
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
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" value={jobForm.email}  onChange={(event) => {
          setJobForm({ ...jobForm, email:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <DescriptionIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Note" variant="standard" value={jobForm.description}  onChange={(event) => {
          setJobForm({ ...jobForm, description:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AttachFileIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <input type="file"  id="input"   onChange= {handleChange} multiple />
       
        
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '45px'}} onClick={createJobForm}> Apply for the Job </Button>
    </Box>
    </>
  );
}
