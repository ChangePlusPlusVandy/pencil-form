import React, { useState } from 'react';
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
    setNumItems(itemLimit);
  }

  function getMinItems() {
    setItems((prevItems) =>
      prevItems.map((el) => (el.uuid === uuid ? { ...el, itemCount: 0 } : el))
    );
    setNumItems(0);
  }

  return (
    <div className="cardContainer">
      <button
        type="button"
        className="minMaxButton"
        id="minButton"
        onClick={getMinItems}
      >
        Min
      </button>
      <div className="itemName">{itemName}</div>
      <button type="button" className="minMaxButton" onClick={getMaxItems}>
        Max
      </button>
      <text className={`itemLimit ${numItems > itemLimit ? 'redFont' : ''}`}>
        Limit: {itemLimit}
      </text>

      <button
        type="button"
        className="roundButton decrement"
        onClick={decrement}
        disabled={numItems === 0}
      >
        <FaMinus size={100} />
      </button>

      <input
        className={`itemCountInputBox ${
          numItems > itemLimit ? 'inputBoxRed' : ''
        }`}
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
        className="roundButton increment"
        onClick={increment}
      >
        <FaPlus size={100} color="#4B4B4B" />
      </button>
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
