import React, { useEffect, useState } from 'react'
import './Homejob.css'
import { myApi } from '../Apis/jobapi'

function Homejob() {
  const[job,setJob]=useState([])

  useEffect(()=>{
    myApi()
    .then(({data})=>{
      setJob(data)
      console.log(data);
    })
  },[])

  let allData=job.data
  console.log(allData);
  return (
    <div className='homejob'>
      Homejob
    </div>
  )
}

export default Homejob