import React from 'react'
import Nav from 'react-bootstrap/Nav'



const Playerslide = (props) => {
    console.log(props.players)
    
    return (
        <div className="flex-column">
           {props.players.length> 0 && props.players.map((p)=>{
            return <a href={`/player/${p.PlayerID}`}>{p.FirstName} {p.LastName}</a>
        })}
        </div> 
        );
    }

export default Playerslide
