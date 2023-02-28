import './CSS/styles.css';
import NavigationBar from './components/NavigationBar';
import Hand from './components/Hand'
import PlayerInfo from './components/PlayerInfo';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
  <div title='Card Game'>
    <NavigationBar />
    <PlayerInfo />
    <Hand />
  </div>
  );
}

export default App;
