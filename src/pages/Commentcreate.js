import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Commentcreate = () =>{
    const [newForm, setNewForm] = useState({
        profileImage:"",
        userName:"",
        uploadPicture:"",
        comment:""
    })

    
    const onChange = (e) =>{
        setNewForm({ ...newForm, [e.target.id]: e.target.value})
    }

     const create = async() => {
        const { profileImage, userName,  uploadPicture, comment} = newForm;

        if ( profileImage && userName  && uploadPicture && comment){
             await axios.post(
                "http://localhost:4000/comment", 
                newForm
            )
            .then(res => alert(res))
        }else{
            alert("Invaled input")
        };
    }

    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div>
                    <label htmlFor="userName">
                        Username
                    </label>
                    <input type="userName" 
                       className="form-control" 
                       id="userName" 
                       aria-describedby="newFormnameHelp" 
                       placeholder="Enter Username"
                       value={newForm.userName}
                       onChange={onChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputprofileImage">
                        profileImage 
                    </label>

                    <input type="text" 
                       className="form-control" 
                       id="profileImage" 
                       aria-describedby="newFormnameHelp" 
                       placeholder="Enter Profile Image"
                       alt={newForm.userName}
                       value={newForm.profileImage}
                       onChange={onChange}
                    />
                 </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputuploadPicture">
                        uploadPicture
                    </label>
                    <input type="uploadPicture" 
                        className="form-control" 
                        id="uploadPicture" 
                        placeholder="uploadPicture"
                        value={newForm.uploadPicture}
                        onChange={onChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputcomment">
                        comment
                    </label>
                    <input type="comment" 
                        className="form-control" 
                        id="comment" 
                        placeholder="comment"
                        value={newForm.comment}
                        onChange={onChange} 
                    />
                </div>
                <Link to={"/comment"} >
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={() => create()}
                    >
                        Add comment
                    </button>
                </Link>
            </form>
        </div>
    )
    // const onSubmit = async(e) =>{
    //     e.preventDefault();
    // }
}

export default Commentcreate;