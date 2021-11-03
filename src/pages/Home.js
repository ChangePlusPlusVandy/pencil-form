import React from "react";
import { Link } from "react-router-dom";
import './Home.css';


const Home = () => {
  return (
    <div className="centered">
      This is the landing page
      <br />
      <Link to="/form"><button>Go to form</button></Link>
    </div>
  );
};

export default Home;