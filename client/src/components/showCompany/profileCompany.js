import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {  AppBar} from '@material-ui/core'
import makeStyles from '../../styles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NfcIcon from '@mui/icons-material/Nfc';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';


//set the company featuers
export default function ProfileCompany() {
  const location = useLocation()
  const x = location.state;
  const [company, setCompany] = useState({
    name:x.name,
    field: x.field,
    numberOfWorker: x.numberOfWorker,
    address: x.address,
    companyImg: x.companyImg,
  });
  
  const classes = makeStyles();

  //the design of the show company profile
  return (
    <>
   <AppBar className={classes.appBar} position="static" color="inherit">
        <ApartmentIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" className="name" label="Name" variant="standard"  InputProps={{ readOnly: true }} value={company.name} onChange={(event) => {
          setCompany({ ...company, name:event.target.value })
        }} />
       </AppBar>
       <AppBar className={classes.appBar} position="static" color="inherit">
        <NfcIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx"  className="id" label="Field" variant="standard"  InputProps={{ readOnly: true }} value={company.field} onChange={(event) => {
          setCompany({ ...company, field:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <FormatListNumberedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Number of workers" variant="standard"  InputProps={{ readOnly: true }} value={company.numberOfWorker} onChange={(event) => {
          setCompany({ ...company, numberOfWorker:event.target.value })
        }}/>
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Address" variant="standard"  InputProps={{ readOnly: true }} value={company.address} onChange={(event) => {
          setCompany({ ...company, address:event.target.value })
        }}/>
    </AppBar>
    <div className="pic"> <img  alt="profile Pic" style= {{  marginLeft:"-800px",marginTop:"-450px", height: '500px', width: '500px',display:"flex" }} src={company.companyImg}></img></div>
    
    
    </>
  );
}


