import React from "react";
import { useHistory } from "react-router-dom";

import './Home.css';

import { getTeacherByID } from './api-form.js'
import { useAuth } from "../AuthContext";


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
      This is the landing page
      <br />
      <form onSubmit={handleSubmit}>
      <label for="tid">Teacher ID: </label><br/>
        <input type="number" name="teacherid" placeholder="Teacher ID" value={teacherID} onChange={(event) => setTeacherID(event.target.value)} />
        <button type="submit">Go to form</button>
        
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;