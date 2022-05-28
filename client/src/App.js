import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import MavsGame from './components/Mavs-cavs';
import Navbar from './components/nav-bar';
import NBA from './components/Nba';
import Nfl from './components/Nfl';
import SixersGame from './components/76ersGame';
import BlazersGame from './components/BlazersGame';
import WarriorsGame from './components/WarriosGame';
import Lottery500Pool from './components/Lottery500Pool';
import Boxing from './components/boxing';
import Ufc from './components/Ufc';
import BurnsFight from './components/BurnsFight';
import ZombieFight from './components/ZombieFight';
import YanFight from './components/YanFight';
import DernFight from './components/DernFight';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* main page */}
        <Route exact path="/">
          <Navbar />
          <Main />
        </Route>

        {/* nfl page */}
        <Route exact path="/nfl">
          <Navbar />
          <Nfl />
        </Route>

        {/* nba page */}
        <Route exact path="/nba">
          <Navbar />
          <NBA />
        </Route>

        {/* ufc page */}
        <Route exact path="/ufc">
          <Navbar />
          <Ufc />
        </Route>

        {/* boxing page */}
        <Route exact path="/boxing">
          <Navbar />
          <Boxing />
        </Route>

        {/* mavericks vs cavaliers */}
        <Route exact path="/nba/cavaliers/mavericks">
          <Navbar />
          <MavsGame />
        </Route>

        {/* 76ers vs pistons */}
        <Route exact path="/nba/76ers/pistons">
          <Navbar />
          <SixersGame />
        </Route>

        {/* blazers vs pelicans */}
        <Route exact path="/nba/trailblazers/pelicans">
          <Navbar />
          <BlazersGame />
        </Route>

        {/* warriors vs suns */}
        <Route exact path="/nba/warriors/suns">
          <Navbar />
          <WarriorsGame />
        </Route>

        {/* volkanovski vs burns */}
        <Route exact path="/ufc/volkanovski/zombie">
          <Navbar />
          <ZombieFight />
        </Route>

        {/* sterling vs yan */}
        <Route exact path="/ufc/sterling/yan">
          <Navbar />
          <YanFight />
        </Route>
        
        {/* burns vs chimaev */}
        <Route exact path="/ufc/burns/chimaev">
          <Navbar />
          <BurnsFight />
        </Route>
        
        {/* dern vs torres */}
        <Route exact path="/ufc/dern/torres">
          <Navbar />
          <DernFight />
        </Route>

        {/* 500 lottery pool */}
        <Route exact path="/lottery/500/pool">
          <Navbar />
          <Lottery500Pool />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
