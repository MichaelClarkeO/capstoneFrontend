import { useEffect, useState } from "react"
import Comment from "./Comment"
import { Route, Routes } from "react-router"
import Editpage from "./Editpage"
import Home from "./Home"
import Playerprofile from "./Playerprofile"


function Main(props) {
    
    const [comment, setComment] = useState(null)
  
    const URL = "http://localhost:4000/Comment/"
  
    const getComment = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setComment(data)
    }
  
    const createComment = async message => {
        // make post request to create Comment
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        })
        // update list of Comment
        getComment()
    }
  
    const updateComment = async (message, id) => {
        // make put request to create Comment
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        })
        // update list of Comment
        getComment()
    }
  
    const deleteComment = async id => {
        // make delete request to create Comment
        await fetch(URL + id, {
            method: "delete",
            })
        // update list of Comment
        getComment()
    }
  
    useEffect(() => getComment(), [])

    return (
       <div>
        
            
        <Routes>
                <Route exact path="/" element={<Home />}>
                    <Comment comment={comment} createComment={createComment} />
                </Route>
                <Route
                    path="/comment/:id"
                    render={rp => (
                        <Editpage
                            comment={comment}
                            updateComment={updateComment}
                            deleteComment={deleteComment}
                            {...rp}
                        />
                    )}
                />
                <Route path="/player/:id" element={<Playerprofile />} />
        </Routes>
        </div> 
    )
}

export default Main