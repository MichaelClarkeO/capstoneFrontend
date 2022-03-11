import React from 'react'
import Nav from 'react-bootstrap/Nav'



const Playerslide = (props) => {
    console.log(props.players)
    
    return (
       <div>
           <div className='widgets'>
                <div className='widgets__header'>
                <h1>Players</h1>
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


                
            <div className="flex-column">
                {props.players.length> 0 && props.players.map((p)=>{
                return <a href={`/player/${p.PlayerID}`}>{p.FirstName} {p.LastName}</a>
            })}
            </div> 
        </div>
        );
    }
        
       
        


export default Playerslide


