import React from 'react';

import './Submitted.css';
import { useAuth } from '../AuthContext';

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
        <a className="link" to="/">
          Back to home
        </a>
      </button>
    </div>
  );
};

export default Submitted;
