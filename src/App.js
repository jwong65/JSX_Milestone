import './CSS/styles.css';

//Importing the Pages
import Home from './components/pages/Home';
import Game from './components/pages/Game';

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
      </Routes>
    </Router>
  </div>
  );
}

export default App;
