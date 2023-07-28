import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
        <div className='navigation'>
          <div className='links'><Link className='link' to='/'>Latest</Link></div>
          <div className='links'><Link  className='link'to='/search'>Shopify</Link></div>
        </div>
    </div>
  )
}

export default Navigation