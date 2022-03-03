import * as React from 'react';
import axios from 'axios';
import { useState , useEffect } from 'react';
import ViewComponent from './ViewComponent';
import { AppBar } from '@material-ui/core'
import makeStyles from '../../styles'

export default function ViewJob() {
  const classes = makeStyles();
  const [jobsList, setJobsList] = useState([])


//to get the jobs from the database
  useEffect(() => {
    axios.get('https://myjobss.herokuapp.com/jobs').then( (allJobs) => {
      setJobsList(allJobs.data);
      
    } 
    )
  }, [])
  //to fill the information of each job 
  return (
    <>
          {jobsList.map((job, key) => (
              <>                 
               <AppBar className={classes.appBar} position="static" color="inherit">
               <ViewComponent name={job.name} discription={job.discription} position={job.position} payPerHour={job.payPerHour} address={job.address} />
               </AppBar>              
              </> 
          ))}
    </>
  );
}
