/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Submitted.css';
import { useAuth } from '../AuthContext';
import SubmittedGraphic from '../assets/submitted.png';

/**
 * Page that verifies success of form submission.
 *
 * @returns {Object} - Page containing success page.
 * */
const Submitted = () => {
  const { clearTeacher, teacher, teacherFirstName } = useAuth();

  return (
    <div className="submitted">
      {teacher && (
        <p id="thanks">
          Thank you for shopping with PENCIL, {teacherFirstName}!
        </p>
      )}
      <br />
      <img
        className="submittedGraphic"
        src={SubmittedGraphic}
        alt="submitted"
      />
      <div
        role="button"
        tabIndex={0}
        className="backHome"
        variant="contained"
        onClick={() => {
          clearTeacher();
        }}
      >
        <a className="link" to="/">
          Back to home
        </a>
      </div>
    </div>
  );
};

export default Submitted;
