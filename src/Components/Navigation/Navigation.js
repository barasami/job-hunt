import React from 'react'
import { Link } from 'react-router-dom';
import './Navigation.css'
import WorkIcon from '@mui/icons-material/Work';

function Navigation() {
  return (
    <div className='nav'>
        <div className='navigation'>
          <div className='alltitle'>THE HUNT</div>
          <div className='links'><WorkIcon color='secondary'/></div>
          <div className='links'><Link className='link' to='/'>Latest</Link></div>
          <div className='links'><Link  className='link'to='/search'>Shopify</Link></div>
        </div>
    </div>
  )
}

export default Navigation