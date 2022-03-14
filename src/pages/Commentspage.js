import React from 'react'
import Commentcreate from './Commentcreate'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Comment(props) {
    const [newForm, setNewForm] = useState({
        profileImage: "",
        userName: "",
        uploadPicture: "",
        comment: "",
    })

    const handleChange = event => {
        setNewForm({...newForm, [event.target.name]: event.target.value })
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        props.createComment(newForm)
        setNewForm({
            profileImage: "",
            userName: "",
            uploadPicture: "",
            comment: "",
        })
    }

    const loaded = () => {
        return props.comment.map((message) =>(
            <div key={message._id} className="message">
            <Link to={`/comment/${message._id}`}><h1>{message.comment}</h1></Link>
            <img src={message.uploadPicture} alt={message.userName} />
            </div>
        ));
    };

    const loading = () => { 
        return <h1> Loading...</h1>
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.UserName}
                    name="Username"
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.uploadPicture}
                    name="image"
                    placeholder="Insert Image"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.comment}
                    name="Comment"
                    placeholder="Comment Here"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Comment" />
            </form>
            {props.people ? loaded() : loading()}
        </section>
    );
}

const Commentspage = () => {
    
  return (
    <div>
       <Link to="/create">
          <div>New comment</div>
        </Link>
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