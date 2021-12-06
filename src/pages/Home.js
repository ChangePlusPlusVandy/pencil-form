import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';

import { useAuth } from '../AuthContext';
import getTeacherByID from './api-form';
// import { ReactComponent as PencilIcon } from '../assets/pencil-icon-2.svg';
import PencilIcon from '../assets/pencil-icon-2.svg';

/**
 * Home page for pencil form.
 *
 * @returns {Object} - Page containing homepage.
 * */

const Home = () => {
  const { populateTeacher } = useAuth();

  const history = useHistory();

  const [teacherID, setTeacherID] = useState(''); // ID of teacher editable by form
  const [error, setError] = useState('');

  /**
   * Gets teacher data if exists, or displays error if teacher doesn't exist.
   *
   * @param {Object} event - Event object.
   * */
  const handleSubmit = (event) => {
    if (teacherID === '') {
      event.preventDefault();
      alert('Please enter your PENCIL ID.');
      return;
    }
    event.preventDefault();
    getTeacherByID(teacherID).then((data) => {
      if (data.error) setError(data.error);
      else {
        // history.push(`/form/${teacherID}`);
        setError('');
        populateTeacher(data);
        history.push(`/form`);
      }
    });
  };

  return (
    <div className="centered">
      <div id="background1" />
      <div id="background2" />
      <div id="line1" />
      <div id="line2" />
      <div id="welcomeMessage">
        <img src={PencilIcon} id="pencil-icon" alt="Aidan silly dumbo" />
        <h2 id="welcome">Welcome to</h2>
        <h1 id="pencil">PENCIL</h1>
      </div>
      <br />
      <div className="idFormBox">
        <form onSubmit={handleSubmit} id="idForm">
          <p id="label">Please enter your PENCIL ID to get started.</p>
          <br />
          <input
            variant="outlined"
            name="teacherid"
            placeholder="PENCIL ID"
            value={teacherID}
            onChange={(event) => setTeacherID(event.target.value)}
          />
          <br />
          <button id="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
