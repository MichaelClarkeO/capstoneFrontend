import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Comment(props) {
    const [comment, setComment] = useState([])
  
    // const URL = "http://localhost:4000/comment/"

  const getComment = async () => {
      const response = await fetch(props.URL + "comment/")
      const data = await response.json()
      setComment(data)
  }

  const createComment = async (comment) => {
      // make post request to create Comment
      await fetch(props.URL + "comment/", {
          method: "post",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
      })
      // update list of Comment
      getComment()
  }

  useEffect(() => getComment(), [])

    const [newComment, setNewComment] = useState({
        profileImage: "",
        userName: "",
        uploadPicture: "",
        comment: "",
        
    })

    const handleChange = event => {
        setNewComment({...newComment, [event.target.name]: event.target.value })
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        createComment(newComment)
        setNewComment({
            profileImage: "",
            userName: "",
            uploadPicture: "",
            comment: "",
            
        })
    }

    const loaded = () => {
        return comment.map((comment) =>(
            <div key={comment._id} className="comment">
            <Link to={`/comment/${comment._id}`}><h1>{comment.comment}</h1></Link>
            <img src={comment.uploadPicture} alt={comment.userName} />
            </div>
        ));
    };

    const loading = () => { 
        return <h1>Loading...</h1>
    };
    
    return (
        <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newComment.profileImage}
                        name="profileImage"
                        placeholder="Add your Profile image"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newComment.userName}
                        name="userName"
                        placeholder="Username"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newComment.uploadPicture}
                        name="uploadPicture"
                        placeholder="Insert Image"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={newComment.comment}
                        name="comment"
                        placeholder="Comment Here"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Create Comment" />
                </form>
            {comment ? loaded() : loading()}
        </section>
    
    );
}

export default Comment
