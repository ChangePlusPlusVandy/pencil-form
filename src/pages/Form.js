import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useAuth } from '../AuthContext';
import PencilIcon from '../assets/pencil-icon-2.svg';
import { getShopForm, submitForm } from './api-form';

// icons from react-icons

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

window.onbeforeunload = goodbye;

const ItemCard = ({
  itemLimit,
  id,
  itemId,
  itemName,
  setItems,
  item,
  items,
  itemCount,
}) => {
  const [numItems, setNumItems] = useState(0);

  function increment() {
    console.log(items);
    setItems((prevItems) =>
      prevItems.map((el) =>
        el.itemId === itemId ? { ...el, itemCount: el.itemCount + 1 } : el
      )
    );
    setNumItems((currNumItems) => currNumItems + 1);
  }

  function decrement() {
    console.log(item);
    setItems((prevItems) =>
      prevItems.map((el) =>
        el.itemId === itemId ? { ...el, itemCount: el.itemCount - 1 } : el
      )
    );
  }

  useEffect(() => {
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

  return (
    <div className="cardContainer">
      <text className="itemName">{itemName}</text>
      <br />
      <text className="itemLimit" id={`limit${id}`}>
        Limit: {itemLimit}
      </text>
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
            setItems((prevItems) =>
              prevItems.map((el) =>
                el.itemId === itemId
                  ? { ...el, itemCount: parseInt(e.target.value, 10) }
                  : el
              )
            );
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

const sampleJson = {
  itemName: 'Pencils',
  itemLimit: 10,
};

const sampleArr = [sampleJson, sampleJson, sampleJson, sampleJson, sampleJson];

const Form = () => {
  const { teacher, location } = useAuth();
  const [items, setItems] = useState([]);
  const submitAll = () => {
    const completeObj = {
      teacherId: teacher.teacherId,
      locationId: location.locationId,
      schoolId: 40, // TODO: Use real school id
      items,
    };

    submitForm(location, completeObj);
  };

  useEffect(() => {
    getShopForm(location).then((result) => {
      console.log(result);
      if (result.error) {
        console.log(result.error);
      } else {
        setItems(result);
      }
    });
  }, []);

  return (
    <div className="pageContainer">
      <div className="header">
        {/* eslint-disable-next-line */}
        <img src={PencilIcon} id="form-pencil-icon" alt="a cartoon pencil" />
        {/* eslint-disable-next-line */}
        {teacher && <h1 id="form-greeting">Welcome, {teacher.firstName}!</h1>}
        {location && <h2 id="location-label">PENCIL - {location}</h2>}
      </div>
      <div className="formContainer">
        {items.map((item, index) => (
          <ItemCard
            id={index}
            itemId={item.itemId}
            itemName={item['Item.itemName']}
            itemLimit={item.maxLimit}
            setItems={setItems}
            item={item}
            items={items}
            itemCount={item.itemCount}
          />
        ))}
        <Link className="submitLink" to="/submitted">
          <button type="button" id="submit" onClick={submitAll}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Form;

ItemCard.propTypes = {
  id: PropTypes.number,
  itemName: PropTypes.string,
  itemLimit: PropTypes.number,
  setItems: PropTypes.func,
  itemCount: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array,
  itemId: PropTypes.number,
};

ItemCard.defaultProps = {
  id: -1,
  itemName: 'None',
  itemLimit: 0,
  setItems: () => {},
  item: {},
  items: [],
  itemId: -1,
  itemCount: 0,
};
