import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import { useAuth } from '../AuthContext';
import PencilIcon from '../assets/pencil-icon-2.svg';
import { getShopForm, submitForm } from './api-form';
import ItemCard from './ItemCard';

/**
 * Form page containing form with school items for teacher.
 *
 * @returns {Object} - Page containing form.
 * */
const Form = () => {
  const { teacher, location, teacherFirstName } = useAuth();
  const [items, setItems] = useState([]);
  const submitAll = () => {
    console.log(teacher, 'meh');
    const completeObj = {
      teacherId: teacher.pencilId,
      locationId: location,
      schoolId: teacher.School.uuid || 2, // TODO: Use real school id
      items,
    };

    submitForm(location, completeObj);
  };

  function goodbye(e) {
    //  Alerts the user if they try to leave the page.
    // FIXME: probably need to rename -- don't know what e signifies
    const event = e || window.event;
    event.cancelBubble = true;
    event.returnValue = 'You sure you want to leave?'; // This is displayed on the dialog

    // e.stopPropagation works in Firefox.
    if (event.stopPropagation) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  useEffect(() => {
    window.onbeforeunload = goodbye;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  useEffect(() => {
    getShopForm(location).then((result) => {
      if (!result || result.error) {
        console.log(result ? result.error : 'error');
      } else {
        setItems(result);
      }
    });
  }, []);

  const handleChange = (count, uuid) => {
    setItems((prevItems) =>
      prevItems.map((el) =>
        el.uuid === uuid ? { ...el, itemCount: count } : el
      )
    );
  };

  return (
    <div className="pageContainer">
      <div className="header">
        <img src={PencilIcon} id="form-pencil-icon" alt="a cartoon pencil" />
        {teacher && <h1 id="form-greeting">Welcome, {teacherFirstName}!</h1>}
        {location && <h2 id="location-label">PENCIL - {location}</h2>}
      </div>
      <div className="formContainer">
        {items.map((item) => (
          <ItemCard
            uuid={item.uuid}
            itemName={item['Item.itemName']}
            itemLimit={item.maxLimit}
            handleChange={handleChange}
          />
        ))}
        <Link className="submitLink" to="/submitted">
          <button type="submit" id="submit" onClick={submitAll}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
