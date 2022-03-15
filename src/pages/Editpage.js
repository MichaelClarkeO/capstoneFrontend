import React from 'react'
import { useState } from 'react'


function Editpage(props) {
    const id = props.match.params.id
    const comment = props.comment
    const message = comment.find(p => p._id === id)
    const [editForm, setEditForm] = useState(message)


    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        props.updateComment(editForm, message._id)
        
        props.history.push("/")
    }
    const removeMessage = () => {
        props.deleteComment(message._id)
        props.history.push("/")
      }

    return (
        <div className="message">
            {/* <h1>{message.userName}</h1>
            <h2>{message.comment}</h2>
            <img src={message.profileImage} alt={message.userName} />
            <button id="delete" onClick={removeMessage}></button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.comment}
                    name="comment"
                    placeholder="Comment Here"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.profileImage}
                    name="profileImage"
                    placeholder="Add your Profile image"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.UserName}
                    name="Username"
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.uploadPicture}
                    name="uploadPicture"
                    placeholder="Insert Image"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Comment" />
            </form> */}
        </div>
    )
}

  export default Editpage