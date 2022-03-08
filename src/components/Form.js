import React from "react"

const Form = (props) => {
    const [formData, setFormData] = React.useState ({
        searchterm:"",
    });
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.playersearch(formData. searchterm);
    }

    return(
        <div>
            <form onsubmit={handleSubmit}>
                <input type= "text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm} 
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
};

export default Form;