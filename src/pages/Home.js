import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      //Fonts
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet" />
      //Header
    <div className='header'>
        <div className='header-left'>
        
        </div>
        <div className='header-right'>
            <div className= ""></div>
        </div>
    </div>
        //Header end


//     <Container>
//   <Row>
//     <Col sm={8}>sm=8</Col>
//     <Col sm={4}>sm=4</Col>
//   </Row>
//   <Row>
//     <Col sm>sm=true</Col>
//     <Col sm>sm=true</Col>
//     <Col sm>sm=true</Col>
//   </Row>
// </Container>
  )
}

export default Home

{/* <>
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
</> */}