import React from "react";
import { Link } from "react-router-dom";

import './Submitted.css';
import { useAuth } from "../AuthContext";

/**
 * Page that verifies success of form submission.
 * 
 * @returns {Object} - Page containing success page.
 * */
const Submitted = () => {

  const { clearTeacher, teacher } = useAuth();

  return (
    <div className="centered">
      {teacher && <p>Thanks, {teacher.firstName}!</p>}
      <br />
      <Link to="/"><button onClick={() => {clearTeacher()}}>Go home</button></Link>
    </div>
  );
};

export default Submitted;