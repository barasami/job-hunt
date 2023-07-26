import { Fragment } from 'react';
import './App.css';
import Homejob from './Components/Homejob/Homejob';
import Homelatest from './Components/Latestjob/Homelatest';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Fragment>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Homelatest/>}/>
          <Route path='/search' element={<Homejob/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
