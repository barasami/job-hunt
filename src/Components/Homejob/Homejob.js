import React, { useEffect, useState } from 'react'
import './Homejob.css'
import { myApi } from '../Apis/jobapi'
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';

function Homejob() {
  const[job,setJob]=useState([])
  const[load,setLoad]=useState(false)

  useEffect(()=>{
    setLoad(true)
    myApi()
    .then(({data})=>{
      setJob(data)
      console.log(data);
      setLoad(false)
    })
  },[])

  let jobNews=job.items
  let allJob=jobNews?.map(({title,location,company_name,date,id})=>{
    let nDate=date.slice(0,10)
    return(
      <Paper elevation={2} key={id} className='paper'>
        <div className='title'>{title}</div>
        <div className='cname'>{company_name}</div>
        <div className=''>{nDate}</div>
        <div className='location'>{location}</div>
      </Paper>
    )
  })
  return (
    <div className='homejob'>
      <div>
        {load ? <CircularProgress color='secondary' className='circular'/> : 
        <div className='alljobs'>
          {allJob}
        </div>}
      </div>
    </div>
  )
}

export default Homejob