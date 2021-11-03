import React from "react";
import { Link } from "react-router-dom";
import './Form.css';
import { useAuth } from "../AuthContext";

/**
 * Form page containing form with school items for teacher.
 * 
 * @returns {Object} - Page containing form.
 * */
const Form = () => {
  const { teacher } = useAuth();
  return (
    
    <div className="centered">
    {teacher && <p>Hello, {teacher.firstName}!</p>}
      <br />
      <Link to="/submitted"><button>Submit</button></Link>
    </div>
  );
};

export default Form;