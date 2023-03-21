import './CSS/styles.css';

//Importing the Pages
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import Attribution from './components/pages/Attribution'

import 'bootstrap/dist/css/bootstrap.min.css'

// Importing react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <div title='Card Game'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game />} />
        <Route path='/sources' element={<Attribution />} />
      </Routes>
    </Router>
  </div>
  );
}
// Example for redirect
{/* <Route
path="about"
element={
  shouldRedirect ? (
    <Navigate replace to="/home" />
  ) : (
    <About />
  )
}
/> */}

export default App;
