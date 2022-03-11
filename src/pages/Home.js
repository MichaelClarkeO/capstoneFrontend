import React from 'react'
import Articlemenu from '../components/Articlemenu'
import Comments from '../components/Comments'
import Teamslide from '../components/Teamslide'
import Playerslide from '../components/Playerslide'

const Home = () => {
  return (
        <div className='body__main'>
        {/* Sidebar */}
            <div className='sidebar'>
               <Articlemenu /> 
            </div>
            {/* //sidebar end */}
            {/* post start  */}
            {/* comment start */}
            <div className='feed'>
               <Comments />
            {/* post end */}
            {/* comment end */}
            </div>
            {/* feed end */}
            {/* Widget start */}
            <div className='widgets'>
                <div className='widgets__header'>
                <h1>Players</h1>
                <Teamslide />
                </div>
            {/* Widget End */}
            </div>
        </div>
  )
}        
  
export default Home