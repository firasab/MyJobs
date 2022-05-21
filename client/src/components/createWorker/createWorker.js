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
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import EventIcon from '@mui/icons-material/Event';


//set the worker featuers
export default function CreateWorker() {
  const [worker, setWorker] = useState({
    name: '',
    id: '',
    location: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    workerImg:'',
    password: '',
    dateStartWorking:'',
    dateFinishWorking:'',
   
  });

  //post method to add worker to database
  const createWorker = () => {
    console.log(worker)
    worker.password = worker.id;
  
    axios.post('https://myjobss.herokuapp.com/workers', worker).then(() => {
      alert('Worker has beed added!');
      window.location.replace('/worker')
    })
  }
  //convert base64
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setWorker( worker => ({
      ...worker,
      workerImg: base64
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


  //the design of the create worker funtion
  return (
    <>
    <h2>Create worker</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField  id="input-with-sx" className="name" label="Name" variant="standard" value={worker.name} onChange={(event) => {
          setWorker({ ...worker, name:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"   className="id" label="ID" variant="standard" value={worker.id} onChange={(event) => {
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

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Start work Date"
          value={worker.dateStartWorking}
          onChange={(event) => {
          let x = JSON.stringify(event)
          //let z = parseInt(x[10])+1;
          let z = parseInt(x[10]);
          let k = parseInt(x[9]);
          if(z===10){
            z= 0;
            k=k+1;
          }
          let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
            setWorker({ ...worker, dateStartWorking:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="End work Date"
          value={worker.dateFinishWorking}
          onChange={(event) => {
          let x = JSON.stringify(event)
          //let z = parseInt(x[10])+1;
          let z = parseInt(x[10]);
          let k = parseInt(x[9]);
          if(z===10){
            z= 0;
            k=k+1;
          }
          let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
            setWorker({ ...worker, dateFinishWorking:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <InsertPhotoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <input type="file" accept="image/*"   onChange= {handleChange} />
        
      </Box>

      <Button variant="contained" color="success"  style= {{ marginLeft: '90px'}} onClick={createWorker}> Create </Button>
    </Box>
    </>
  );
}
