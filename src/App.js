import './App.css';
import NavigationBar from './components/NavigationBar';
import Hand from './components/Hand'
import PlayerInfo from './components/PlayerInfo';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <NavigationBar />
    <PlayerInfo />
    <Hand />
  </>
  );
}

export default App;
