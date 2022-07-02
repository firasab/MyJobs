import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {  AppBar} from '@material-ui/core'
import makeStyles from '../../styles'
import AccountCircle from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EventIcon from '@mui/icons-material/Event';
import {Button  } from 'react-bootstrap';
import { Link} from 'react-router-dom';


export default function ProfileWorker() {
  const location = useLocation()
  const x = location.state;

  //worker feature
  const [worker, setWorker] = useState({
    name:x.name,
    id: x.id,
    location: x.location,
    phoneNumber: x.phoneNumber,
    email: x.email,
    companyName: x.companyName,
    workerImg: x.workerImg,
    dateStartWorking : x.dateStartWorking,
    dateFinishWorking: x.dateFinishWorking,
  });
  

  const classes = makeStyles();

 //the design of the show worker profile
 return (
    <>
    <AppBar className={classes.appBar} position="static" color="inherit">
    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField  id="outlined-read-only-input" className="name" label="Name" variant="standard" InputProps={{ readOnly: true }} value={worker.name} onChange={(event) => {
          setWorker({ ...worker, name:event.target.value })
        }} />
        </AppBar>
        <AppBar className={classes.appBar} position="static" color="inherit">
        <PermIdentityIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="outlined-read-only-input" className="id" label="ID" variant="standard" InputProps={{ readOnly: true }} value={worker.id} onChange={(event) => {
          setWorker({ ...worker, id:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="outlined-read-only-input" label="Address" variant="standard" InputProps={{ readOnly: true }} value={worker.location} onChange={(event) => {
          setWorker({ ...worker, location:event.target.value })
        }}/>
       </AppBar>
       <AppBar className={classes.appBar} position="static" color="inherit">
       <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="outlined-read-only-input" label="Phone number" variant="standard" InputProps={{ readOnly: true }} value={worker.phoneNumber} onChange={(event) => {
          setWorker({ ...worker, phoneNumber:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="outlined-read-only-input" label="Email" variant="standard"  InputProps={{ readOnly: true }} value={worker.email}  onChange={(event) => {
          setWorker({ ...worker, email:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="outlined-read-only-input" label="Company name" variant="standard" InputProps={{ readOnly: true }} value={worker.companyName}  onChange={(event) => {
          setWorker({ ...worker, companyName:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="outlined-read-only-input" label="Started working at this date" variant="standard" InputProps={{ readOnly: true }} value={worker.dateStartWorking}  onChange={(event) => {
          setWorker({ ...worker, dateStartWorking:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <EventIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="outlined-read-only-input" label="Finishing working at this date" variant="standard" InputProps={{ readOnly: true }} value={worker.dateFinishWorking}  onChange={(event) => {
          setWorker({ ...worker, dateFinishWorking:event.target.value })
        }}/>
      </AppBar>
      
      <div className="pic"> <img  alt="profile Pic" style= {{  marginLeft:"-750px",marginTop:"-800px", height: '500px', width: '500px',display:"flex" }} src={worker.workerImg}></img>
      <Button as={Link} to={{pathname: `/workerHour`,state: x._id}}  style={{ marginLeft: "-600px",width:"200px" , height:"40px", marginTop:"10px" }} >{worker.name} Hours</Button></div>
     
    </>
  );
}

