import React from "react";
import { Link } from "react-router-dom";
import './Submitted.css';

const Submitted = () => {
  return (
    <div className="centered">
      This is the success page
      <br />
      <Link to="/"><button>Go home</button></Link>
    </div>
  );
};

export default Submitted;