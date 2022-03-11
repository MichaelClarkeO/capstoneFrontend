import React from 'react'

const Form = () => {
  return (
    <div>Form</div>
  )
}

export default Form

// [formData, setFormData] = React.useState ({
//     searchterm:"",
// });
// const handleChange = (event) => {
//     setFormData({...formData, [event.target.FirstName]: event.target.value});
// };
// const handleSubmit = (event) => {
//     event.preventDefault();
//     props.search(formData. searchterm);
// }

// return(
//     <div>
//         <form onsubmit={handleSubmit}>
//             <input type= "text"
//             name="searchterm"
//             onChange={handleChange}
//             value={formData.searchterm} 
//             />
//             <input type="submit" value="submit" />
//         </form>
//     </div>
// )
// };