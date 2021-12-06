import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useAuth } from '../AuthContext';

// icons from react-icons

/**
 * Form page containing form with school items for teacher.
 *
 * @returns {Object} - Page containing form.
 * */

function goodbye(e) {
  //  Alerts the user if they try to leave the page.
  if(!e) e = window.event;
  e.cancelBubble = true;
  e.returnValue = 'You sure you want to leave?'; //This is displayed on the dialog

  //e.stopPropagation works in Firefox.
  if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
  }
}

window.onbeforeunload=goodbye; 

const ItemCard = (props) => {
  const [numItems, setNumItems] = useState(0);
  const { itemLimit, id, itemName } = props;

  function increment() {
    setNumItems((currNumItems) => currNumItems + 1);
  }

  function decrement() {
    setNumItems((currNumItems) => currNumItems - 1);
  }

  useEffect(() => {
    if (numItems > props.itemLimit) {
      document.getElementById(`limit${props.id}`).style.color = "#F04747";
      document.getElementById(`${props.id}${props.itemName}`).style.border = "4px solid #F04747";
    } else {
      document.getElementById(`limit${props.id}`).style.color = "#555555";
      document.getElementById(`${props.id}${props.itemName}`).style.border = "4px solid #DCDCDC";
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
          <button id="disabled" className="roundButton" disabled={true}>

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
          value={numItems}
          onChange={(e) => {
            setNumItems(e.target.value);
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
  const { teacher } = useAuth();
  const itemsObj = {};
  const submitAll = () => {
    for (let index = 0; index < sampleArr.length; index++) {
      var itemName = `${index}${sampleArr[index].itemName}`;
      var itemValue = document.getElementById(itemName).value;
      itemsObj[`${sampleArr[index].itemName}`] = itemValue;
    }
    let completeObj = {
      items: itemsObj,
      teacherId: teacher.teacherId,
      schoolId: teacher.schoolId
    };
    console.log(completeObj);
  };

  return (
    <div className="pageContainer">
      <div className="header">
        {teacher && <h1>Hello, {teacher.firstName}!</h1>}
      </div>
      <div className="formContainer">
        {sampleArr.map(function (item, index) {
          return (
            <ItemCard
              id={index}
              itemName={item.itemName}
              itemLimit={item.itemLimit}
            />
          );
        })}
        <Link class='submitLink' to="/submitted">
          <button id="submit" onClick={submitAll}>
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
};

ItemCard.defaultProps = {
  id: -1,
  itemName: 'None',
  itemLimit: 0,
};
