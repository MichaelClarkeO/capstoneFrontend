import React from 'react'

const Commentspage = () => {
  return (
    <div>
        <div className='feed__inputContainer'>
                <div className='feed__input'>
                <i className='material-icons'>create</i>
                <form>
                    <input type="text" placeholder='Start a post'/>
                    <button>Send</button>
                </form>
                </div>
                <div className='feed__inputOptions'>
                    <div className='inputOption'>
                        <i className='material-icons'>insert_photo</i> 
                        <h4>Photo</h4>
                    </div>
                    <div className='inputOption'>
                        <i className='material-icons'>subscriptions</i> 
                        <h4>Video</h4>
                    </div>
                    <div className='inputOption'>
                        <i className='material-icons'>event</i> 
                        <h4>Event</h4>
                    </div>
                    <div className='inputOption'>
                        <i className='material-icons'>note</i> 
                        <h4>Note</h4>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Commentspage