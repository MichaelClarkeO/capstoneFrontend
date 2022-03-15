import './App.css';
import Nav from './components/Nav';
import React from 'react';
import Playerslide from './components/Playerslide';
import Main from './pages/Main';
import Teamslide from './components/Teamslide';
import { useEffect, useState } from "react"
import Comment from './pages/Comment';
import { Route, Routes, Outlet } from "react-router-dom"
import Editpage from './pages/Editpage';
import Home from './pages/Home';
import Playerprofile from './pages/Playerprofile';


function App() {
  const apiKey = "821d7fd8045a41fda38614f49bfb1ece"

  const [players, setPlayers] = React.useState([]);
  
  const getPlayers = async () => {
    const response = await fetch (
      `https://api.sportsdata.io/v3/nba/scores/json/Players?key=${apiKey}`
    );
    const data = await response.json();
    setPlayers(data);
  };
  const [teams, setTeams] = React.useState([]);
  
  const getTeam = async (searchTerm) => {
    const response = await fetch (
      `https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setTeams(data);
  };
  const URL = "http://localhost:4000/"

React.useEffect(()=>{
  getPlayers()
}, [])
React.useEffect(()=>{
  getTeam()
}, [])

  return (
    <div className="App">
    <Nav /> 
      {/* <Playerslide players={players}/>
      <Teamslide teams={teams}/> */}
      <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/comment" element={<Comment URL={URL} />} />
                <Route path="/comment/:id" element={<Editpage URL={URL} />} />
                {/* <Route path="/player/:id" element={<Playerprofile />} /> */}
        </Routes>
    </div>
  );
}

export default App;
