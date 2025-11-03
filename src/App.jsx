import { useState } from "react";
import "./App.css";

function App() {
  const [picture, setpicture] = useState("");
  const [usename, setusename] = useState("");
  const [useremail, setuseremail] = useState("");
  const [user, Setusers] = useState([]);

  const chanheimage = (evn) => {
    setpicture(evn.target.value);
  };

  const Formsubmited = (evn) => {
    evn.preventDefault();
    Setusers([...user, { usename, useremail, picture }]);
    setpicture("");
    setusename("");
    setuseremail("");
  };

  const removefun = (i) => {
    const copyuser = [...user];
    copyuser.splice(i, 1);
    Setusers(copyuser);
  };
  return (
    <>
      <div className="header">
        <h1 style={{width:"100%",textAlign:"center",opacity:"0.7",fontSize:"2rem"}}>
          User Profile Card Generator
        </h1>

        <form onSubmit={Formsubmited}>
          <input
            required
            value={usename}
            type="text"
            placeholder="enter user name"
            onChange={(e) => {
              setusename(e.target.value);
            }}
          />
          <input
            required
            value={useremail}
            type="email"
            placeholder="enter email"
            onChange={(e) => {
              setuseremail(e.target.value);
            }}
          />
          <input
            required
            value={picture}
            type="text"
            placeholder="enter image url"
            onChange={chanheimage}
          />
          <button type="submit">submit</button>
        </form>
        <div className="Usercards">
          {user.map((evn, index) => {
            return (
              <div key={index} className="card">
                <div className="imgbox">
                  <img className="image" src={`${evn.picture}`} alt="" />
                </div>
                <p className="username">{evn.usename}</p>
                <p className="useremail">{evn.useremail}</p>
                <p className="about">
                  Lorem ipsum dolor sit ame suscipit illo t, sed, reprehenderit
                  praesentium maxime ipsam assumenda fugit, illum es.
                </p>
                <button
                  className="remove"
                  onClick={() => {
                    removefun(index);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
