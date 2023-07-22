import { Fragment } from 'react';
import './App.css';
import Homejob from './Components/Homejob/Homejob';
import Homelatest from './Components/Latestjob/Homelatest';
import Homeresume from './Components/Resumes/Homeresume';
import Homeletter from './Letter/Homeletter';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path='/' element={<Homelatest/>}/>
          <Route path='/search' element={<Homejob/>}/>
          <Route path='/resume' element={<Homeresume/>}/>
          <Route path='/letter' element={<Homeletter/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
