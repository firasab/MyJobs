import * as React from 'react';
import { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from 'react-select';


export default function WorkerHours() {
  const location = useLocation()
  const x = location.state;
  console.log(x);
  const [hours,setHours]=useState([]);
  const [year , setYear] = useState("2022");
  const [month , setMonth] = useState("6");
  const user = {mo:""}

  //get method to get worker hours from database
  useEffect(() => {
    user.mo = year +"-"+month;
    axios.patch(`https://myjobss.herokuapp.com/workers/gethours/${x}`,user).then( (resp) => {
      setHours(resp.data);
      console.log(resp.data);
    } )
  }, [year,month])

  const yearPicker = [
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
    { label: '2026', value: '2026' },
    { label: '2027', value: '2027' },
    
  ];
  const monthPicker = [
    { label: 'Jan', value: '1' },
    { label: 'Feb', value: '2' },
    { label: 'Mar', value: '3' },
    { label: 'Apr', value: '4' },
    { label: 'May', value: '5' },
    { label: 'Jun', value: '6' },
    { label: 'Jul', value: '7' },
    { label: 'Aug', value: '8' },
    { label: 'Sep', value: '9' },
    { label: 'Oct', value: '10' },
    { label: 'Nov', value: '11' },
    { label: 'Dec', value: '12' },
    
  ];


 //the design of the show worker Monthly hours report
 return (
  <>
  
  <TableContainer  style={{ marginTop: '20px'}} component={Paper}>
  <Table id="table-to-xls" sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
    <TableRow>
      <TableCell>
      <Select
          options={yearPicker} 
          defaultValue={year}
          onChange={(event) => { setYear(event.label) }}  />
      </TableCell>
      <TableCell>
      <Select
          options={monthPicker} 
          defaultValue={month}
          onChange={(event) => { setMonth(event.value) }}  />
      </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Date</TableCell>
        <TableCell align="right">Start Hour</TableCell>
        <TableCell align="right">Finish Hour</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {hours.map((hour, key) => (
        <TableRow key={key}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {hour.date}
          </TableCell>
          <TableCell align="right">{hour.hourS}</TableCell>
          <TableCell align="right">{hour.hourE}</TableCell>
         
                                                     
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
</>
  );
}

