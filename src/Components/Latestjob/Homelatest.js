import React, { useEffect, useState } from 'react'
import './Latest.css'
import { secondJob } from '../Apis/jobtwo'

function Homelatest() {
  const[first,setfirst]=useState([])
  useEffect(()=>{
    secondJob()
    .then(({data})=>{
      setfirst(data)
      console.log(data);
    })
  },[])
  return (
    <div className='homelatest'>
      Homelatest
    </div>
  )
}

export default Homelatest