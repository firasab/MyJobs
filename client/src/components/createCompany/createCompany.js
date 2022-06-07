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
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

//set the company featuers
export default function CreateCompany() {
  const [company, setCompany] = useState({
    name: '',
    field: '',
    numberOfWorker: '',
    address: '',
    companyImg: ''

  });
  //post method to add company to database
  const createCompany = () => {
    if (!company.name ) {
      alert("please add company name!")      
    }
    else  if ( !company.field) {
      alert("please add the company field!")      
    }
    else  if ( !company.numberOfWorker) {
      alert("please add the company number Of Workers!")      
    }
    else  if ( !company.address) {
      alert("please add the company address!")      
    }
    else  if ( !company.companyImg) {
      alert("please add the company company Image!")      
    }
    else{
    axios.post('https://myjobss.herokuapp.com/companies', company).then(() => {
      alert('Company has beed added!');
      window.location.replace('/company')
    })}
  }

  //change the pic to text base64
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setCompany( company => ({
      ...company,
      companyImg: base64
    }));
  

  
  };

  //convert base64
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
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <InsertPhotoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <input type="file" accept="image/*"   onChange= {handleChange} />
        
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '120px'}} onClick={createCompany}> Create </Button>
    </Box>
    </>
  );
}
