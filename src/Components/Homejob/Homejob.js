import React, { useEffect, useState } from 'react'
import './Homejob.css'
import { myApi } from '../Apis/jobapi'

function Homejob() {
  const[job,setJob]=useState([])

  useEffect(()=>{
    myApi()
    .then(({data})=>{
      setJob(data)
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
        {allJob}
      </div>
    </div>
  )
}

export default Homejob