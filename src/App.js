import './App.css';
import Homejob from './Components/Homejob/Homejob';
import Homelatest from './Components/Latestjob/Homelatest';
import Homeresume from './Components/Resumes/Homeresume';
import Homeletter from './Letter/Homeletter';

function App() {
  return (
    <div className="App">
      <Homelatest/>
      <Homejob/>
      <Homeresume/>
      <Homeletter/>
    </div>
  );
}

export default App;
