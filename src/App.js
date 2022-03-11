import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Routes, Route, Outlet} from "react-router-dom";
import Home from './pages/Home';
import Playerprofile from './pages/Playerprofile';
import Teamprofile from './pages/Teamprofile';
import Commentspage from './pages/Commentspage';
import React from 'react';
import Form from './components/Form';
import Playerslide from './components/Playerslide';
import Teamslide from './components/Teamslide'
import Userprofile from './pages/Userprofile';
function App() {
  const apiKey = "821d7fd8045a41fda38614f49bfb1ece"

  const [players, setPlayers] = React.useState([]);
  const [teams, setTeams] = React.useState(null);
  const getPlayers = async () => {
    const response = await fetch (
      `https://api.sportsdata.io/v3/nba/scores/json/Players?key=${apiKey}`
    );
    const data = await response.json();
    setPlayers(data);
  };
  const getTeam = async (searchTerm) => {
    const response = await fetch (
      `https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setTeams(data);
  };
React.useEffect(()=>{
  getPlayers()
}, [])
React.useEffect(()=>{
  getTeam()
}, [])
  return (
    <div className="App">
    <Nav /> 
      <Form />
      <Playerslide players={players}/>
      <Teamslide teams={teams}/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/comments" element={<Commentspage />} />
        <Route path="/player/:id" element={<Playerprofile />} />
        {/* render={(props) => <SingleProject {...props} />} */}
        <Route path="/team/:id" element={<Teamprofile />} />
        <Route path="/user" element={<Userprofile />} />
    </Routes>
    <Outlet />
    </div>
  );
}

export default App;
