import React from 'react'
import Form from './Form'

const Comments = () => {
  return (
    <div>
        {/* post start */}
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
        {/* post end */}
        {/* comment start  */}
        <div className='post'>
                <div className='post__header'>
                        <div className='post__info'>
                            <h2>Photo</h2>
                            <p>Username</p>
                        </div>
                </div>
                    <div className='post__body'>
                    <Form />
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
                    <div className='post__header'>
                        <div className='post__info'>
                            <h2>Photo</h2>
                            <p>Username</p>
                        </div>
                </div>

                    <div className='post__body'>
                        <form>
                            <input type="text" placeholder='Comment Here'/>
                            <button>Post</button>
                        </form>
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
                    <div className='post__header'>
                        <div className='post__info'>
                            <h2>Photo</h2>
                            <p>Username</p>
                        </div>
                </div>

                    <div className='post__body'>
                    <form>
                            <input type="text" placeholder='Comment Here'/>
                            <button>Post</button>
                        </form>
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
                    <div className='post__header'>
                        <div className='post__info'>
                            <h2>Photo</h2>
                            <p>Username</p>
                        </div>
                </div>

                    <div className='post__body'>
                    <form>
                            <input type="text" placeholder='Comment Here'/>
                            <button>Post</button>
                        </form>
                    </div>

                    <div className='feed__inputOptions'>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_up</i>
                            <h4>Likes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>thumb_down</i>
                            <h4>Dislikes</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>message</i>
                            <h4>Comment</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>edit</i>
                            <h4>Update</h4>
                        </div>
                        <div className='inputOption'>
                            <i className='material-icons'>delete</i>
                            <h4>Delete</h4>
                        </div>
                    </div>
            </div>
        {/* comment end  */}
    </div>
  )
}

export default Comments