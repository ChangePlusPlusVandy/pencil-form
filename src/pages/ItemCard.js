import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';

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

  return (
    <div className="cardContainer">
      <div className="topRow">
        <button type="button" className="minMaxButton" onClick={getMinItems}>
          Min
        </button>
        <div className="itemName">{itemName}</div>
        <button type="button" className="minMaxButton" onClick={getMaxItems}>
          Max
        </button>
      </div>
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

export default ItemCard;

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
