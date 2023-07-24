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

  let latestDat=first.data
  let allJobs=latestDat?.map(({url,title,postDate,jobSource,dateAdded,company,tags})=>{
    let mytag=tags.map(({text})=>{
      return(
        <div>
          <div>{text}</div>
          
        </div>
      )
    })
    return(
      <div>
        <div>{title}</div>
        <div>{company}</div>
        <div>{dateAdded}</div>
        <div>{postDate}</div>
        <div>{jobSource}</div>
        <div>{url}</div>
        <div>{mytag}</div>
      </div>
    )
  })
  return (
    <div className='homelatest'>
      <div>{allJobs}</div>
    </div>
  )
}

export default Homelatest