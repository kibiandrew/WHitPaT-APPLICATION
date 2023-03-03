import React, { useState } from "react";

const NewReportForm = ({ params,onAddPost, hidePopUp,handleupdateClick,id, post }) => {
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    location: "",
    user_id: ""

  });

  // 0703380880

  // function handleupdateClick(){
  //   fetch(`http://localhost:9292/updatereports/${id}`,{
  //     method: "PATCH",
  //     headers: {
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(
  //       {
  //         title: inputData.title,
  //         description: inputData.description,
  //         location: inputData.location,

  //       }
  //     )


  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res))

  // }

  // console.log(params.id)
  // const URL="https://emergencybackend.herokuapp.com"
  const handleInputChange = (event) => {
    setInputData({
        ...inputData,[event.target.name]: event.target.value
    })
  };
  const handleInputDescription = (event) => {
    setInputData({
        ...inputData,[event.target.name]: event.target.value
    })

  };

  const handleInputLocation = (event) => {
    setInputData({
        ...inputData,[event.target.name]: event.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataInput ={
        title: inputData.title,
        description: inputData.description,
        location: inputData.location,
        user_id:params.id
    }

    fetch(`${URL}/postposts`,{
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(dataInput)
    })
    .then((res) => res.json())
    .then((data) => onAddReport(data));

    setInputData({
      title: "",
      description: "",
      location: "",
    })
    window.location.reload();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="formR">
        <input
          type="text"
          name="title"
          placeholder="Enter Type of party"
          onChange={handleInputChange}
          value={inputData.title}
        />
        <br />
        <textarea
          type="text"
          name="description"
          placeholder="Enter Description of party"
          onChange={handleInputDescription}
          value={inputData.description}
        />
        <br />
        <input
          type="text"
          name="location"
          placeholder="Enter Location of party"
          onChange={handleInputLocation}
          value={inputData.location}
        />
        <br />

        <div className="action_btn">
        <button type="submit" className="party-btn">
          Submit
        </button>

        <a className="close-btn" onClick={hidePopUp}>
          Close
        </a>
        </div>
        
      </form>
    </div>
  );
};

export default NewPostForm;
