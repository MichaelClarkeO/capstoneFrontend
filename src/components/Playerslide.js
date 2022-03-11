import React from 'react'
import Nav from 'react-bootstrap/Nav'



const Playerslide = (props) => {
    console.log(props.players)
    
    return (
        //  <Nav>
        // {props.players.length> 0 && props.players.map((p)=>{
        //     return <Nav.Link href={`/player/${p.PlayerID}`}>{p.FirstName}</Nav.Link>
        // })}
        // </Nav>
        // <Link to="/player/123">Expenses</Link>
        <div className="flex-column">
            {props.players.length> 0 && props.players.map((p)=>{
             return <a href={`/player/${p.PlayerID}`}>{p.FirstName} {p.LastName}</a>
         })}
        </div>
        );
    }
        
       
        


export default Playerslide


{/* <>
        <img src="{player.PhotoUrl}" alt={player.FirstName} />
        <h1> {player.FirstName} {player.LastName} </h1>
        <h2> {player.Status} </h2>
        <h2> {player.Team} </h2>
        <div> {player.PositionCategory} </div>
        <div> {player.Position} </div>
        <div> {player.Height} </div>
        <div> {player.Weight} </div>
        <div> {player.BirthDate} </div>
        <div> {player.BirthCity}, {player.BirthState} </div>
        <div> {player.HighSchool} </div>
        <div> {player.College} </div>
        <div> {player.Salary} </div>
        <div> {player.Experience} </div>
        <a href='https://www.nba.com/stats/player/${player.NbaDotComPlayerID}'>Player stats </a>
        </>
        )
         */}