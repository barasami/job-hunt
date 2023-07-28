import React, { useEffect, useState } from 'react'
import './Latest.css'
import { secondJob } from '../Apis/jobtwo'
import CircularProgress from '@mui/material/CircularProgress';
import LinkIcon from '@mui/icons-material/Link';

function Homelatest() {
  const[first,setfirst]=useState([])
  const[load,setLoad]=useState(false)
  useEffect(()=>{
    setLoad(true)
    secondJob()
    .then(({data})=>{
      setfirst(data)
      console.log(data);
      setLoad(false)
    })
  },[])

  let latestDat=first.data
  let allJobs=latestDat?.map(({url,title,postDate,jobSource,dateAdded,company,tags,slug})=>{
    let mytag=tags.map(({text})=>{
      return(
        <div key={slug}>
          <div>{text}</div>
        </div>
      )
    })
    let nDate=dateAdded.slice(0,10)
    
    return(
      <div>
        <div className='title'>{title}</div>
        <div className='company'>{company}</div>
        <div className='dateadd'>{nDate}</div>
        <div>{postDate}</div>
        <div className='source'>{jobSource}</div>
        <div><a href={url} target='_blank' className='linking' rel="noreferrer"><LinkIcon color='success'/></a></div>
        <div className='tags'>{mytag}</div>
      </div>
    )
  })
  return (
    <div className='homelatest'>
      <div>
        {load ? <CircularProgress color='secondary' className='circular'/> : 
        <div>
          {allJobs}
        </div>}
      </div>
    </div>
  )
}

export default Homelatest