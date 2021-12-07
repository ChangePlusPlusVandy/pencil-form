import React from 'react';
import { Link } from 'react-router-dom';

import './Submitted.css';
import { useAuth } from '../AuthContext';

/**
 * Page that verifies success of form submission.
 *
 * @returns {Object} - Page containing success page.
 * */
const Submitted = () => {
  const { clearTeacher, teacher } = useAuth();

  return (
    <div className="submitted">
      {teacher && (
        <p id="thanks">
          Thank you for shopping with PENCIL, {teacher.firstName}!
        </p>
      )}
      <br />
      <div className="fullPencil">
        <div className="secondLine" />
        <div className="pencilIcon" />
        <div className="firstLine" />
      </div>
      <button
        type="button"
        className="backHome"
        variant="contained"
        onClick={() => {
          clearTeacher();
        }}
      >
        <Link className="link" to="/">
          Back to home
        </Link>
      </button>
    </div>
  );
};

export default Submitted;
