import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Playerprofile from './pages/Playerprofile';
import Teamprofile from './pages/Teamprofile';
import Commentspage from './pages/Commentspage';
import React from 'react';
import Form from './components/Form';
import Playerslide from './components/Playerslide';

function App() {
  const apiKey = "821d7fd8045a41fda38614f49bfb1ece"

  const [player, setPlayer] = React.useState(null);
  const getPlayer = async (searchTerm) => {
    const response = await fetch (
      `https://api.sportsdata.io/v3/nba/scores/json/AllTeams?key=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setPlayer(data);
  };

  return (
    <div className='App'>
      <Form playersearch={getPlayer} />
      <Playerslide player={player} />
    </div>
  );
}





//   return (
//     <div className="App">
//      <Nav />
//      <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/comments" element={<Commentspage />} />
//         <Route path="/player" element={<Playerprofile />} />
//         <Route path="/team" element={<Teamprofile />} />
//      </Routes>
//     </div>
//   );
// }

export default App;
