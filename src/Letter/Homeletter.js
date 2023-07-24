import React, { useEffect, useState } from 'react'
import './Letter.css'
import { allLetter } from './letter'

function Homeletter() {
  const[letter,setletter]=useState([])

  useEffect(()=>{
    allLetter()
    .then(({data})=>{
      setletter(data)
      console.log(data);
    })

  },[])
  return (
    <div className='Letter'>
      Homeletter
    </div>
  )
}

export default Homeletter