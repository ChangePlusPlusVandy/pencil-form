import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useAuth } from '../AuthContext';
import PencilIcon from '../assets/pencil-icon-2.svg';
import { getShopForm, submitForm } from './api-form';

/**
 * Form page containing form with school items for teacher.
 *
 * @returns {Object} - Page containing form.
 * */

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

const ItemCard = ({ itemLimit, id, uuid, itemName, setItems, itemCount }) => {
  const [numItems, setNumItems] = useState(0);

  function increment() {
    setItems((prevItems) =>
      prevItems.map((el) =>
        el.uuid === uuid ? { ...el, itemCount: el.itemCount + 1 } : el
      )
    );
    setNumItems((currNumItems) => currNumItems + 1);
  }

  function decrement() {
    setItems((prevItems) =>
      prevItems.map((el) =>
        el.uuid === uuid ? { ...el, itemCount: el.itemCount - 1 } : el
      )
    );
    setNumItems((currNumItems) => currNumItems - 1);
  }

  function getMaxItems() {
    setItems((prevItems) =>
      prevItems.map((el) =>
        el.uuid === uuid ? { ...el, itemCount: itemLimit } : el
      )
    );
  }

  function getMinItems() {
    setItems((prevItems) =>
      prevItems.map((el) => (el.uuid === uuid ? { ...el, itemCount: 0 } : el))
    );
  }

  useEffect(() => {
    console.log(numItems, itemLimit);
    if (numItems > itemLimit) {
      document.getElementById(`limit${id}`).style.color = '#F04747';
      document.getElementById(`${id}${itemName}`).style.border =
        '4px solid #F04747';
    } else {
      document.getElementById(`limit${id}`).style.color = '#555555';
      document.getElementById(`${id}${itemName}`).style.border =
        '4px solid #DCDCDC';
    }
  }, [numItems, id, itemLimit]);

  useEffect(() => {
    window.onbeforeunload = goodbye;
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <div className="cardContainer">
      <text className="itemName">{itemName}</text>
      <br />
      <text className="itemLimit" id={`limit${id}`}>
        Limit: {itemLimit}
      </text>
      <div className="max">
        {numItems === itemLimit ? (
          <button type="button" id="notMax" className="maxButton" disabled>
            Max
          </button>
        ) : (
          <button
            type="button"
            id="getMax"
            className="maxButton"
            onClick={getMaxItems}
          >
            Max
          </button>
        )}
      </div>
      <div className="min">
        {numItems === 0 ? (
          <button type="button" id="notMax" className="minButton" disabled>
            Min
          </button>
        ) : (
          <button
            type="button"
            id="getMax"
            className="minButton"
            onClick={getMinItems}
          >
            Min
          </button>
        )}
      </div>
      <div className="itemCountContainer">
        {numItems <= 0 ? (
          <button type="button" id="disabled" className="roundButton" disabled>
            <FaMinus size={100} />
          </button>
        ) : (
          <button
            type="button"
            id="incrementDown"
            className="roundButton"
            onClick={decrement}
          >
            <FaMinus size={100} color="#4B4B4B" />
          </button>
        )}
        <input
          className="itemCountInputBox noselect"
          pattern="[0-9]*"
          type="number"
          name={itemName}
          id={`${id}${itemName}`}
          value={itemCount}
          onChange={(e) => {
            console.log(e.target.value);
            setItems((prevItems) =>
              prevItems.map((el) =>
                el.uuid === uuid
                  ? { ...el, itemCount: parseInt(0 || e.target.value, 10) }
                  : el
              )
            );
            setNumItems((currNumItems) => 0 || e.target.value);
          }}
        />
        <button
          type="button"
          id="incrementUp"
          className="roundButton"
          onClick={increment}
        >
          <FaPlus size={100} color="#4B4B4B" />
        </button>
      </div>
      <div className="hozizontalLine" />
    </div>
  );
};

const Form = () => {
  const { teacher, location, teacherFirstName } = useAuth();
  const [items, setItems] = useState([]);
  const submitAll = () => {
    const completeObj = {
      teacherId: teacher.pencilId,
      locationId: location,
      schoolId: teacher.School.uuid || 2, // TODO: Use real school id
      items,
    };

    submitForm(location, completeObj);
  };

  useEffect(() => {
    getShopForm(location).then((result) => {
      if (!result || result.error) {
        console.log(result ? result.error : 'error');
      } else {
        setItems(result);
      }
    });
  }, []);

  return (
    <div className="pageContainer">
      <div className="header">
        <img src={PencilIcon} id="form-pencil-icon" alt="a cartoon pencil" />
        {teacher && <h1 id="form-greeting">Welcome, {teacherFirstName}!</h1>}
        {location && <h2 id="location-label">PENCIL - {location}</h2>}
      </div>
      <div className="formContainer">
        {items.map((item, index) => (
          <ItemCard
            id={index}
            uuid={item.uuid}
            itemName={item['Item.itemName']}
            itemLimit={item.maxLimit}
            setItems={setItems}
            itemCount={item.itemCount}
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

ItemCard.propTypes = {
  id: PropTypes.number,
  itemName: PropTypes.string,
  itemLimit: PropTypes.number,
  setItems: PropTypes.func,
  itemCount: PropTypes.number,
  uuid: PropTypes.string,
};

ItemCard.defaultProps = {
  id: -1,
  itemName: 'None',
  itemLimit: 0,
  setItems: () => {},
  uuid: '',
  itemCount: 0,
};

export default Form;
