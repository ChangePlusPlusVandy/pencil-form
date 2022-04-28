/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';

import { useAuth } from '../AuthContext';
import { getTeacherByID, getAllLocations } from './api-form';
// import { ReactComponent as PencilIcon } from '../assets/pencil-icon-2.svg';
import PencilIcon from '../assets/pencil-icon-2.svg';

/**
 * Home page for pencil form.
 *
 * @returns {Object} - Page containing homepage.
 * */

const Home = () => {
  const { populateTeacher, populateLocation, location } = useAuth();

  const history = useHistory();

  const [teacherID, setTeacherID] = useState(''); // ID of teacher editable by form
  const [teacherLocation, setTeacherLocation] = useState(location); // Location of teacher editable by form
  const [error, setError] = useState('');
  const [locationArr, setLocationArr] = useState([]);

  useEffect(() => {
    console.log(location);
  }, []);

  /**
   * Gets teacher data if exists, or displays error if teacher doesn't exist.
   *
   * @param {Object} event - Event object.
   * */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(teacherLocation);
    if (teacherID === '') {
      setError('Pencil ID is required.');
    } else if (!teacherLocation) {
      setError('Location is required.');
    } else {
      getTeacherByID(teacherID).then((data) => {
        console.log(data);
        if (data.error) setError(data.error);
        else {
          setError('');
          populateTeacher(data);
          populateLocation(teacherLocation);
          history.push(`/form`);
        }
      });
    }
  };

  useEffect(() => {
    getAllLocations().then((result) => {
      if (!result || result.error) {
        console.log(result ? result.error : 'error');
      } else {
        console.log(result);
        setLocationArr(result);
      }
    });
  }, []);

  return (
    <div className="centered">
      <div id="background1" />
      <div id="background2" />
      <div id="line1" />
      <div id="line2" />
      <div id="welcomeMessage">
        <img src={PencilIcon} id="pencil-icon" alt="A cartoon pencil" />
        <h2 id="welcome">Welcome to</h2>
        <h1 id="pencil">PENCIL</h1>
      </div>
      <br />
      {locationArr.length > 0 ? (
        <div className="idFormBox">
          <form onSubmit={handleSubmit} id="idForm">
            <p id="label">
              Please enter your PENCIL ID and location to get started.
            </p>
            <br id="desktopBr" />
            <input
              variant="outlined"
              name="teacherid"
              placeholder="PENCIL ID"
              value={teacherID}
              autoComplete="off"
              onChange={(event) => setTeacherID(event.target.value)}
            />
            <select
              variant="outlined"
              name="location"
              placeholder="LOCATION"
              value={teacherLocation}
              autoComplete="off"
              className="selectLocation"
              onChange={(event) => setTeacherLocation(event.target.value)}
            >
              <option value="" disabled="disabled" selected="selected">
                Select a Location
              </option>
              {locationArr.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
            <br />
            {error && <p className="errorMessage">{error}</p>}
            <button id="submitButton" type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <p>
          Something has went wrong. Unable to query the locations from the
          database. Please contact the developers
        </p>
      )}
    </div>
  );
};

export default Home;
