import React from 'react'
import Nav from 'react-bootstrap/Nav'



const Teamslide = (props) => {
    console.log(props.teams)
    
    return (
        <div>
            <div className='widgets__header2'>
                <h1>Teams</h1>
                <i className='material-icons'>info</i>
            </div>

                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
                <div className='widgets__article'>
                    <div className='widget__articleLeft'>
                    <i className='material-icons'> fiber_manaual_record</i>
                    </div>
                </div>
                <div className='widgets__article'>
                    <h4 className='widget__articleRight'></h4>
                    <p>Top news - 4500 readers</p>
                </div>
        </div>
    )
}
            // <Nav className="flex-column">
         //{props.teams.length> 0 && props.teams.map((p)=>{
        // return <Nav.Link href={`/team/${p.TeamID}`}>{p.City}{p.Name}</Nav.Link>
     //})} 
            //</Nav> 
     
        
       
        


export default Teamslide