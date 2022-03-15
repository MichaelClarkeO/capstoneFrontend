import React from 'react'
import { useState } from 'react'
import {useParams} from 'react-router'


function Editpage(props) {
    const { id } = useParams();
    const [comment, setComment] = useState([]);
    // const message = comment.find(p => p._id === id)
    const [editForm, setEditForm] = useState(comment)

    const updateComment = async (comment, id) => {
        // make put request to create people
        await fetch(props.URL + "comment/" + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(comment),
        })
        // update list of people
        getComment()
    }

    const deleteComment = async id => {
        // make delete request to create people
        await fetch(props.URL + "comment/" + id, {
            method: "delete",
        })
        // update list of people
        getComment()
    }

    // handleChange function for form
    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value })
    }

    // handlesubmit for form
    const handleSubmit = event => {
        event.preventDefault()
        updateComment(editForm, comment._id)
        
        props.history.push("/")
    }
    const removeComment = () => {
        deleteComment(comment._id)
        props.history.push("/comment")
      }

      const getComment = async () => {
        const response = await fetch(props.URL + "comment");
        const data = await response.json();
        const match = data.find(p => p._id === id);
        setComment(match);
    };
    return (
        <div className="message">
            <h1>{comment.userName}</h1>
            <h2>{comment.comment}</h2>
            <img src={comment.profileImage} alt={comment.userName} />
            <button id="delete" onClick={removeComment}></button>
            <form onSubmit={handleSubmit}>
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
                <input
                    type="text"
                    value={editForm.comment}
                    name="comment"
                    placeholder="Comment Here"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Comment" />
            </form>
            <button id="delete" onClick={removeComment}>
                    DELETE
                </button>
        </div>
    )
}

  export default Editpage