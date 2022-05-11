import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import Select from 'react-select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

//set the worker featuers
export default function EditSchedule() {
  const location = useLocation()
  const x = location.state;
  const [worker, setWorker] = useState({
    name:x.name,
    id:x.id,
    location:x.location,
    phoneNumber:x.phoneNumber,
    email:x.email,
    companyName:x.companyName,
    workerImg:x.workerImg,
    isWorkingSun: x.isWorkingSun,
    isWorkingMon: x.isWorkingMon,
    isWorkingTues: x.isWorkingTues,
    isWorkingWed: x.isWorkingWed,
    isWorkingThur: x.isWorkingThur,
    isWorkingFri: x.isWorkingFri,
    isWorkingSat: x.isWorkingSat,
    password: x.password,

    timeWorkingSun :x.timeWorkingSun,
    timeWorkingMon :x.timeWorkingMon,
    timeWorkingTues :x.timeWorkingTues,
    timeWorkingWed : x.timeWorkingWed,
    timeWorkingThur :x.timeWorkingThur,
    timeWorkingFri :x.timeWorkingFri,
    timeWorkingSat : x.timeWorkingSat,

    dateStartWorking: x.dateStartWorking,
    dateFinishWorking: x.dateFinishWorking,
  });

  const timePicker = [
    { label: 'OFF', value: 'OFF' },
    { label: '6:00 - 15:00', value: 'morning' },
    { label: '12:00 - 20:00', value: 'late-morning' },
    { label: '14:00 - 22:00', value: 'afternon' },
    { label: '15:00 - 24:00', value: 'night' },
    { label: 'All Day', value: 'Allday' },
    
  ];

 
  
      //post method to update worker to database
  const editSchedule = () => {
    axios.post(`https://myjobss.herokuapp.com/workers/update/${x._id}`, worker).then(() => {
      
      alert('Worker Schedule has beed Created!');
      window.location.replace('/schedule')
    })
  }

  
 


  

  //the design of the create worker funtion
  return (
    <>
    <h2>Worker Schedule</h2>
    <Box sx={{ '& > :not(style)': { m: 1 } }}> 
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Pick a Date"
          value={worker.isWorkingSun}
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
            setWorker({ ...worker, isWorkingSun:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <Select
          options={timePicker} 
          defaultValue={worker.timeWorkingSun}
          onChange={(event) => { setWorker({ ...worker, timeWorkingSun:event.label }) }}  />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Pick a Date"
          value={worker.isWorkingMon}
          onChange={(event) => {
            let x = JSON.stringify(event)
            let z = parseInt(x[10])+1
            let k = parseInt(x[9]);
            if(z===10){
              z= 0;
              k=k+1;
            }
            let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
          
          console.log(y)
            setWorker({ ...worker, isWorkingMon:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <Select
          options={timePicker} 
          defaultValue={worker.timeWorkingMon}
          onChange={(event) => { setWorker({ ...worker, timeWorkingMon:event.label }) }}  />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Pick a Date"
          value={worker.isWorkingTues}
          onChange={(event) => {
            let x = JSON.stringify(event)
            let z = parseInt(x[10])+1
            let k = parseInt(x[9]);
            if(z===10){
              z= 0;
              k=k+1;
            }
            let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
        
            setWorker({ ...worker, isWorkingTues:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <Select
          options={timePicker} 
          defaultValue={worker.timeWorkingTues}
          onChange={(event) => { setWorker({ ...worker, timeWorkingTues:event.label }) }}  />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Pick a Date"
          value={worker.isWorkingWed}
          onChange={(event) => {
            let x = JSON.stringify(event)
            let z = parseInt(x[10])+1
            let k = parseInt(x[9]);
            if(z===10){
              z= 0;
              k=k+1;
            }
            let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
            setWorker({ ...worker, isWorkingWed:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <Select
          options={timePicker} 
          defaultValue={worker.timeWorkingWed}
          onChange={(event) => { setWorker({ ...worker, timeWorkingWed:event.label }) }}  />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Pick a Date"
          value={worker.isWorkingThur}
          onChange={(event) => {
            let x = JSON.stringify(event)
            let z = parseInt(x[10])+1
            let k = parseInt(x[9]);
            if(z===10){
              z= 0;
              k=k+1;
            }
            let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
            setWorker({ ...worker, isWorkingThur:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <Select
          options={timePicker} 
          defaultValue={worker.timeWorkingThur}
          onChange={(event) => { setWorker({ ...worker, timeWorkingThur:event.label }) }}  />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Pick a Date"
          value={worker.isWorkingFri}
          onChange={(event) => {
            let x = JSON.stringify(event)
            let z = parseInt(x[10])+1
            let k = parseInt(x[9]);
            if(z===10){
              z= 0;
              k=k+1;
            }
            let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
            setWorker({ ...worker, isWorkingFri:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <Select
          options={timePicker} 
          defaultValue={worker.timeWorkingFri}
          onChange={(event) => { setWorker({ ...worker, timeWorkingFri:event.label }) }}  />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          label="Pick a Date"
          value={worker.isWorkingSat}
          onChange={(event) => {
            let x = JSON.stringify(event)
            let z = parseInt(x[10])+1
            let k = parseInt(x[9]);
            if(z===10){
              z= 0;
              k=k+1;
            }
            let y = x[6]+x[7]+x[8]+k+z+x[5]+x[1]+x[2]+x[3]+x[4]
            setWorker({ ...worker, isWorkingSat:y })
          }}
          renderInput={(params) => <TextField {...params} />}
        
        />
      </LocalizationProvider>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <Select
          options={timePicker} 
          defaultValue={worker.timeWorkingSat}
          onChange={(event) => { setWorker({ ...worker, timeWorkingSat:event.label }) }}  />
      </Box>


      <Button variant="contained" color="success"  style= {{ marginLeft: '50px'}}  onClick={() => editSchedule()}> Update Schedule </Button>
    </Box>
    </>
  );
}


