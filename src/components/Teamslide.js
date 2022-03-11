import React from 'react'
import Nav from 'react-bootstrap/Nav'



const Teamslide = (props) => {
    console.log(props.teams)
    
    return (
        <Nav className="flex-column">
        {/* {props.teams.length> 0 && props.teams.map((p)=>{
         return <Nav.Link href={`/team/${p.TeamID}`}>{p.City}{p.Name}</Nav.Link>
     })} */}
    </Nav>
        );
    }
        
       
        


export default Teamslide