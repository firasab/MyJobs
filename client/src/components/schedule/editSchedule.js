import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
//import Select from 'react-select';

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
  });

  // const timePicker = [
  //   { label: '6:00 - 15:00', value: 'morning' },
  //   { label: '12:00 - 20:00', value: 'late-morning' },
  //   { label: '14:00 - 22:00', value: 'afternon' },
  //   { label: '15:00 - 24:00', value: 'night' },
  // ];

 
 
  
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

    {/* <Select
        options={timePicker} 
        defaultValue={worker.isWorkingSun}
         onChange={(event) => {  setWorker({ ...worker, isWorkingSun:event.target.value })  }} 
        
      /> */}

 
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="isWorkingSun" label="Sunday" variant="standard" value={worker.isWorkingSun} onChange={(event) => {
          setWorker({ ...worker, isWorkingSun:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="isWorkingSun" label="Working hours in sunday" variant="standard" value={worker.timeWorkingSun} 
        onChange={(event) => { setWorker({ ...worker, timeWorkingSun:event.target.value }) }} />
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="isWorkingMon" label="Monday" variant="standard" value={worker.isWorkingMon} onChange={(event) => {
          setWorker({ ...worker, isWorkingMon:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="isWorkingMon" label="Working hours in Monday" variant="standard" value={worker.timeWorkingMon} onChange={(event) => {
          setWorker({ ...worker, timeWorkingMon:event.target.value })
        }}/>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Tuesday" variant="standard" value={worker.isWorkingTues} onChange={(event) => {
          setWorker({ ...worker, isWorkingTues:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Working hours in Tuesday" variant="standard" value={worker.timeWorkingTues} onChange={(event) => {
          setWorker({ ...worker, timeWorkingTues:event.target.value })
        }}/>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Wednesday" variant="standard" value={worker.isWorkingWed} onChange={(event) => {
          setWorker({ ...worker, isWorkingWed:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Working hours in Wednesday" variant="standard" value={worker.timeWorkingWed} onChange={(event) => {
          setWorker({ ...worker, timeWorkingWed:event.target.value })
        }}/>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Thursday" variant="standard" value={worker.isWorkingThur}  onChange={(event) => {
          setWorker({ ...worker, isWorkingThur:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Working hours in Thursday" variant="standard" value={worker.timeWorkingThur}  onChange={(event) => {
          setWorker({ ...worker, timeWorkingThur:event.target.value })
        }}/>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Friday" variant="standard" value={worker.isWorkingFri}  onChange={(event) => {
          setWorker({ ...worker, isWorkingFri:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Working hours in Friday" variant="standard" value={worker.timeWorkingFri}  onChange={(event) => {
          setWorker({ ...worker, timeWorkingFri:event.target.value })
        }}/>
      </Box>


      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Saturday" variant="standard" value={worker.isWorkingSat}  onChange={(event) => {
          setWorker({ ...worker, isWorkingSat:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Working hours in Saturday" variant="standard" value={worker.timeWorkingSat}  onChange={(event) => {
          setWorker({ ...worker, timeWorkingSat:event.target.value })
        }}/>
      </Box>


      <Button variant="contained" color="success"  style= {{ marginLeft: '50px'}}  onClick={() => editSchedule()}> Update Schedule </Button>
    </Box>
    </>
  );
}


