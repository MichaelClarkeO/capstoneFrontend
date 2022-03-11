import React from 'react'
import Comments from '../components/Comments'
import Teamslide from '../components/Teamslide'

const Playerprofile = () => {
  return (
    <div className='body__main'>
        <div className='feed'>
            <Comments />
        </div>
        <div className='widgets'>
                <div className='widgets__header'>
                <h1>Players</h1>
                <Teamslide />
                </div>
        </div>
    </div>

  )
}

export default Playerprofile