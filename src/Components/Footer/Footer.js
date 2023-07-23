import React from 'react'
import './Footer.css'

function Footer() {
    const today=new Date().getFullYear()
  return (
    <div className='foot'>
        <div className='footer'>
          <p className='info'>&copy;jobhunt {today} All rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer