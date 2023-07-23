import React from 'react'
import HomeIcon from '@mui/icons-material/Home';//home
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';//search job
import WorkIcon from '@mui/icons-material/Work';//resume
import EditCalendarIcon from '@mui/icons-material/EditCalendar';//letter
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <div className='nav'>
        <div className='navigation'>
          <div className='links'><Link to='/'><HomeIcon/></Link></div>
          <div className='links'><Link to='/search'><ContentPasteSearchIcon/></Link></div>
          <div className='links'><Link to='/resume'><WorkIcon/></Link></div>
          <div className='links'><Link to='/letter'><EditCalendarIcon/></Link></div>
        </div>
    </div>
  )
}

export default Navigation