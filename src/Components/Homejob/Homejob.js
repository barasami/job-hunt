import React, { useEffect, useState } from 'react'
import './Homejob.css'
import { myApi } from '../Apis/jobapi'
import CircularProgress from '@mui/material/CircularProgress';

function Homejob() {
  const[job,setJob]=useState([])
  const[load,setLoad]=useState(false)

  useEffect(()=>{
    setLoad(true)
    myApi()
    .then(({data})=>{
      setJob(data)
      setLoad(false)
    })
  },[])

  let jobNews=job.items
  let allJob=jobNews?.map(({tittle,location,company_name,company_logo,date,id})=>{
    return(
      <div key={id}>
        <div>{tittle}</div>
        <div>{company_logo}</div>
        <div>{company_name}</div>
        <div>{date}</div>
        <div>{location}</div>
      </div>
    )
  })
  return (
    <div className='homejob'>
      <div>
        {load ? <CircularProgress color='inherit' className='circular'/> : 
        <div>
          {allJob}
        </div>}
      </div>
    </div>
  )
}

export default Homejob