import React from "react";
import { useHistory } from "react-router-dom";

import './Home.css';

import { getTeacherByID } from './api-form.js'
import { useAuth } from "../AuthContext";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";


/**
 * Home page for pencil form.
 * 
 * @returns {Object} - Page containing homepage.
 * */

const Home = () => {

  const { populateTeacher } = useAuth();

  const history = useHistory();

  const [teacherID, setTeacherID] = React.useState(""); //ID of teacher editable by form
  const [error, setError] = React.useState("");


  /**
   * Gets teacher data if exists, or displays error if teacher doesn't exist.
   * 
   * @param {Object} event - Event object.
   * */
  const handleSubmit = (event) => {
    if (teacherID === ""){
      alert('Please enter your PENCIL ID.')
      return;
    }
    event.preventDefault();
    getTeacherByID(teacherID).then((data) => {
      if(data.error) setError(data.error);
      else {
        // history.push(`/form/${teacherID}`);
        setError("");
        populateTeacher(data);
        history.push(`/form`);
      }
    })
  };

  return (
    <div className="centered">
      <h2>Welcome to</h2>
      <h1>PENCIL</h1>
      <br />
      <form onSubmit={handleSubmit}>
      <p id='label'>Please enter your PENCIL ID to get started.</p><br/>
        <TextField variant="outlined"  name="teacherid" placeholder="PENCIL ID" value={teacherID} onChange={(event) => setTeacherID(event.target.value)} />
        <br/>
        <button id="submitButton" variant="contained" type="submit">Go to form</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;