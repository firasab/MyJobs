import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


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
  });
 

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
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="isWorkingSun" label="Sunday" variant="standard" value={worker.isWorkingSun} onChange={(event) => {
          setWorker({ ...worker, isWorkingSun:event.target.value })
        }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="isWorkingMon" label="Monday" variant="standard" value={worker.isWorkingMon} onChange={(event) => {
          setWorker({ ...worker, isWorkingMon:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Tuesday" variant="standard" value={worker.isWorkingTues} onChange={(event) => {
          setWorker({ ...worker, isWorkingTues:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Wednesday" variant="standard" value={worker.isWorkingWed} onChange={(event) => {
          setWorker({ ...worker, isWorkingWed:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Thursday" variant="standard" value={worker.isWorkingThur}  onChange={(event) => {
          setWorker({ ...worker, isWorkingThur:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Friday" variant="standard" value={worker.isWorkingFri}  onChange={(event) => {
          setWorker({ ...worker, isWorkingFri:event.target.value })
        }}/>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccessTimeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Saturday" variant="standard" value={worker.isWorkingSat}  onChange={(event) => {
          setWorker({ ...worker, isWorkingSat:event.target.value })
        }}/>
      </Box>
      <Button variant="contained" color="success"  style= {{ marginLeft: '50px'}}  onClick={() => editSchedule()}> Update Schedule </Button>
    </Box>
    </>
  );
}


