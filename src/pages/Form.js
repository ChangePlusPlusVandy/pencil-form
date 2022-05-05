import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [error, setError] = useState('');
  const [shopFormError, setShopFormError] = useState(false);
  const history = useHistory();
  const submitAll = async (e) => {
    e.preventDefault();
    const completeObj = {
      teacherId: teacher.pencilId,
      locationId: location,
      schoolId: teacher.School.uuid,
      items,
    };
    try {
      await submitForm(location, completeObj).then(() =>
        history.push('/submitted')
      );
    } catch (err) {
      setError(
        err.response.data && Object.keys(err.response.data).length
          ? err.response.data
          : 'Unable to process request. Please contact the administrator.'
      );
    }
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

  useEffect(async () => {
    try {
      await getShopForm(location).then((result) => {
        setItems(result);
        setShopFormError(false);
      });
    } catch (err) {
      setError(
        err.response.data && Object.keys(err.response.data).length
          ? err.response.data
          : 'Unable to process request. Please contact the administrator.'
      );
      setShopFormError(true);
    }
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
        <div>
          {teacher && <h2 id="form-greeting">Welcome, {teacherFirstName}!</h2>}
          {location && <h2 id="location-label">PENCIL - {location}</h2>}
        </div>
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
        {error && <p className="errorMessage">{error}</p>}
        <div className="submitLink">
          {shopFormError ? (
            <button
              type="submit"
              id="submitButton"
              onClick={(e) => {
                e.preventDefault();
                history.push('/');
              }}
            >
              Back
            </button>
          ) : (
            <button type="submit" id="submitButton" onClick={submitAll}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
