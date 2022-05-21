import * as React from 'react';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NfcIcon from '@mui/icons-material/Nfc';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import {  AppBar} from '@material-ui/core'
import makeStyles from '../../styles'


export default function EditJob() {
  const location = useLocation()
  const edt = location.state;
  // jon profile feature
  const [job, setJob] = useState({
    name:edt.name,
    discription: edt.discription,
    position: edt.position,
    payPerHour: edt.payPerHour,
    address: edt.address,
    jobImg: edt.jobImg
  });
  
  const classes = makeStyles();
   //the design of the show job profile
  return (
    <>
     <AppBar className={classes.appBar} position="static" color="inherit">
        <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard"  InputProps={{ readOnly: true }} value={job.name} onChange={(event) => {
          setJob({ ...job, name:event.target.value })
        }} />
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <NfcIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="id" label="Field" variant="standard"  InputProps={{ readOnly: true }} value={job.discription} onChange={(event) => {
          setJob({ ...job, discription:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <FormatListNumberedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Number of workers" variant="standard"  InputProps={{ readOnly: true }} value={job.position} onChange={(event) => {
          setJob({ ...job, position:event.target.value })
        }}/>
     </AppBar>
     <AppBar className={classes.appBar} position="static" color="inherit">
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard"  InputProps={{ readOnly: true }} value={job.payPerHour} onChange={(event) => {
          setJob({ ...job, payPerHour:event.target.value })
        }}/>
     </AppBar>
     <AppBar className={classes.appBar} position="static" color="inherit">
        <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard"  InputProps={{ readOnly: true }} value={job.address} onChange={(event) => {
          setJob({ ...job, address:event.target.value })
        }}/>
      </AppBar>
      <div className="pic"> <img  alt="job Pic" style= {{  marginLeft:"-700px",marginTop:"-550px", height: '500px', width: '500px',display:"flex" }} src={job.jobImg}></img></div>
    
    

    </>
  );
}


