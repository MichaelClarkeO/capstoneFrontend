import React from 'react'

const Playerslide = (player) => {
    return (
        <>
        <img src="{player.PhotoUrl}" alt={player.FirstName} />
        <h1> {player.FirstName} {player.LastName} </h1>
        <h2> {player.Status} </h2>
        <h2> {player.Team} </h2>
        <h2> {player.PositionCategory} </h2>
        <h2> {player.Position} </h2>
        <h2> {player.Height} </h2>
        <h2> {player.Weight} </h2>
        <h2> {player.BirthDate} </h2>
        <h2> {player.BirthCity}, {player.BirthState} </h2>
        <h2> {player.HighSchool} </h2>
        <h2> {player.College} </h2>
        <h2> {player.Salary} </h2>
        <h2> {player.Experience} </h2>
        <a href='https://www.nba.com/stats/player/{player.NbaDotComPlayerID}'>Player stats </a>
        </>
        )
        
    }

export default Playerslide