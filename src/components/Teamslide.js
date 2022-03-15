import React from 'react'




const Teamslide = (props) => {
    console.log(props.teams)
    
    return (
        <div>
               {/* <div className="flex-column">
           {props.teams.length> 0 && props.teams.map((p)=>{
            return <a href={`/team/${p.TeamID}`}>{p.City} {p.Name}</a>
        })}
        </div>  */}
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
   
     
        
       
        


export default Teamslide