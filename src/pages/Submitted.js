import React from "react";
import { Link } from "react-router-dom";

import './Submitted.css';
import { useAuth } from "../AuthContext";

import itemsObj from "./Form"
import Button from '@mui/material/Button';

/**
 * Page that verifies success of form submission.
 * 
 * @returns {Object} - Page containing success page.
 * */
const Submitted = () => {

    const { clearTeacher, teacher } = useAuth();

    return (
      <div className="centered">
        {teacher && <p id='thanks'>Thanks, {teacher.firstName}!</p>}
        <br />
        <Link to="/"><Button variant="contained" onClick={() => {clearTeacher()}}>Go home</Button></Link>
      </div>
    );
};

export default Submitted;
