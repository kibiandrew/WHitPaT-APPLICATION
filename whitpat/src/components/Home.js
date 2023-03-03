import React, { useState }from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
// import Footer from "./Footer";
// import Posts from "./";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";


const Home = ({ post, onAddPost ,onPostDelete}) => {
  const [isHide, setIsHide] = useState(false);
  // const [search, setSearch] = useState();
  const [btnText, setBtnText] = useState("post a party");
  const [hideButtom, setHideButton] = useState(false);

  let params = useParams();



  const postdisplay = post.map((repo) => (
    <PostList 
    id={repo.id} 
    repo={repo} 
    onPostDelete={onPostDelete}
    params={params}
    />
  ));

  const togglePopUp = () => {
    if (isHide) {
      setIsHide("");
      setBtnText("report an emergency");
    } else {
      setIsHide(<NewPostForm params={params} onAddPost={onAddPost} />);
      setBtnText("close");
    }
  };

  return (
    <div>
    <NavBar />
    <div className="container-post">

    <div className="form_container">{true ? [isHide] : null}</div>

      <div className="displayuserName">
        <h1 className="userdetails">Welcome {params.username}!!</h1>
      </div>
      <div className="formcont">
    {
      params.role === 'user' ? 
      <div style={{display: hideButtom}}>
      <button className="add-btn" onClick={togglePopUp} >
        {btnText}
      </button>
    </div>
  : ' '  
  }
      </div>

        <div className="searchbar">
          <input type="text" className="search"  placeholder="search by title" />
          <h3 >posts display</h3>

        </div>

        {/* posts*/}
        <div className="postsheader">
        </div>

        <div className="displayposts">
          <table>
            <thead>
            <tr>
              <th>Time&Date</th>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {postdisplay}
            </tbody>
          </table>
          </div>
          </div>
        {/* posts containerends */}
      </div>
  );
};

export default Home;
