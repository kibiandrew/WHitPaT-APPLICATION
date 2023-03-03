import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import NewPostForm from "./components/NewPostForm";
// const url ="https://emergencybackend.herokuapp.com"
function App({params}) {
  // const [isDarkMode,setIsDarkMode]=useState(false)
  const [post, setPost] = useState([]);
  // this will be used for the Dark Mode Toggle feature
  // function handleButton(){
  //   setIsDarkMode((isDarkMode)=> !isDarkMode)

  // }
  // const appClass = isDarkMode ? "App dark" : "App light"

  // fetching

  useEffect(() => {
    fetch(`${url}/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const onAddPost = (addNewPost) => {
    setPost([addNewPost, ...post]);
  };
  const handleDeletePost = (id) => {
    const updatePost = post.filter((post) => post.id !== id);
    setPost(updatePost);
  };


  return (
    <div>
      <Routes>
        <Route
          path="/:id/:username/:role"
          element={
            <Home
            params={params}
              post={post}
              onAddPost={onAddPost}
              onPostDelete={handleDeletePost}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/addpost" element={<NewPostForm  params={params} onAddPost={onAddPost} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
