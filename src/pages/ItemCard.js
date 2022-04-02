import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ItemCard = ({ uuid, itemName, itemLimit, handleChange }) => {
  const [numItems, setNumItems] = useState(0);

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setNumItems(val);
  };

  useEffect(() => {
    handleChange(numItems, uuid);
  }, [numItems]);

  return (
    <div className="cardContainer">
      <button
        type="button"
        className="minMaxButton"
        id="minButton"
        onClick={() => setNumItems(0)}
      >
        Min
      </button>
      <div className="itemName">{itemName}</div>
      <button
        type="button"
        className="minMaxButton"
        onClick={() => setNumItems(itemLimit)}
      >
        Max
      </button>
      <text className={`itemLimit ${numItems > itemLimit ? 'redFont' : ''}`}>
        Limit: {itemLimit}
      </text>

      <button
        type="button"
        className="roundButton decrement"
        onClick={() => setNumItems(numItems - 1)}
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
        value={numItems}
        onChange={handleInputChange}
        min="0"
      />
      <button
        type="button"
        className="roundButton increment"
        onClick={() => setNumItems(numItems + 1)}
      >
        <FaPlus size={100} />
      </button>
    </div>
  );
};

export default ItemCard;

ItemCard.propTypes = {
  uuid: PropTypes.string,
  itemName: PropTypes.string,
  itemLimit: PropTypes.number,
  handleChange: PropTypes.func,
};

ItemCard.defaultProps = {
  uuid: '',
  itemName: 'None',
  itemLimit: 0,
  handleChange: () => {},
};
