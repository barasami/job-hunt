import React from 'react'
import HomeIcon from '@mui/icons-material/Home';//home
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';//search job
import WorkIcon from '@mui/icons-material/Work';//resume
import EditCalendarIcon from '@mui/icons-material/EditCalendar';//letter
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <div>
            <Link to='/'><HomeIcon/></Link>
            <Link to='/search'><ContentPasteSearchIcon/></Link>
            <Link to='/resume'><WorkIcon/></Link>
            <Link to='/letter'><EditCalendarIcon/></Link>
        </div>
    </div>
  )
}

export default Navigation