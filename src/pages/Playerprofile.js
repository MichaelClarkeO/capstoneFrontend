import React from 'react'
import Comments from '../components/Comments'
import PictureCard from '../components/PictureCardBody'
import Teamslide from '../components/Teamslide'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Playerprofile = () => {
  return (
    <div className='body__main'>
        <div className='playerinfo'>
            <PictureCard /> 
        </div>
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