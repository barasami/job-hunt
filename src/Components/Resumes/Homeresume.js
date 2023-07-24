import React, { useEffect, useState } from 'react'
import './Resume.css'
import { getResume } from './resume'

function Homeresume() {
  const[resume,setresume]=useState([])

  useEffect(()=>{
    getResume()
    .then(({data})=>{
      setresume(data)
      console.log(data);
    })
  },[])
  return (
    <div className='Resume'>
      Homeresume
    </div>
  )
}

export default Homeresume