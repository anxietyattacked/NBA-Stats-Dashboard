import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Footer from './components/main/Footer';
import Nav from './components/main/Nav';
import './index.css'
import HomeScreen from './Screens/HomeScreen';
import PlayerScreen from './Screens/PlayerScreen';
import players from "./players"



 

  
const App = () => {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomeScreen}/>
        {players.map(player => (
           <Route key={player.path} path={player.path}>
           <PlayerScreen 
           playerUrl={player.playerUrl} 
           gameUrl={player.gameUrl}
           playerImg={player.image}
           name={player.name}
           teamColors={player.colors}
           team={player.team}
           teamLogo={player.teamLogo}
           number={player.number}
           />
         </Route>
        ))}
    
      </Switch>
    <Footer/>
    </Router>
  )
};
export default App;
