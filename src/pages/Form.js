import React from "react";
import { Link } from "react-router-dom";
import './Form.css';

/**
 * Form page containing form with school items for teacher.
 * 
 * @returns {Object} - Page containing form.
 * */
const Form = () => {
  return (
    <div className="centered">
      This is the form page
      <br />
      <Link to="/submitted"><button>Submit</button></Link>
    </div>
  );
};

export default Form;