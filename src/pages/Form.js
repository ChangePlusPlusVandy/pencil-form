import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Form.css";
import { useAuth } from "../AuthContext";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

/**
 * Form page containing form with school items for teacher.
 *
 * @returns {Object} - Page containing form.
 * */

const ItemCard = (props) => {
  // clarifications needed from Joel:
  // 1. Do we need distinction between packs and items?
  // 2. Is the limit a hard limit? Do we disable the button if limit is reached?
  // const [isPack, setIsPack] = useState(false);
  const [numItems, setNumItems] = useState(0);
  const [limitReached, setLimitReached] = useState(false);

  function incrementUp() {
    checkValue(numItems + 1);
    setNumItems(numItems + 1);
  }

  function incrementDown() {
    checkValue(numItems - 1);
    setNumItems(numItems - 1);
  }

  function checkValue(target) {
    if (target > props.itemLimit) {
      setLimitReached(true);
      document.getElementById(`limit${props.id}`).style.color = "red";
    } else {
      setLimitReached(false);
      document.getElementById(`limit${props.id}`).style.color = "black";
    }
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <h2>{props.itemName}</h2>
        <h5 id={`limit${props.id}`} class={`$props.itemName`}>
          Limit: {props.itemLimit}
        </h5>
        {/* make a round button */}
        <button onClick={incrementDown} disabled={limitReached}>
          -
        </button>

        <input
          type="number"
          name={props.itemName}
          id={`${props.id}${props.itemName}`}
          value={numItems}
          onChange={(e) => {
            setNumItems(e.target.value);
            checkValue(e.target.value);
          }}
        ></input>
        <button onClick={incrementUp}>-</button>
      </CardContent>
    </Card>
  );
};

const sampleJson = {
  itemName: "Pencils",
  itemLimit: 10,
};

const sampleArr = [sampleJson, sampleJson, sampleJson, sampleJson, sampleJson];

let itemsObj = {};

const Form = () => {
  const submitAll = () => {
    for (let index = 0; index < sampleArr.length; index++) {
      var itemName = `${index}${sampleArr[index].itemName}`;
      var itemValue = document.getElementById(itemName).value;
      itemsObj[itemName] = itemValue;
    }
    console.log(itemsObj);
  };

  const { teacher } = useAuth();
  return (
    <div className="centered">
      {teacher && <h1>Hello, {teacher.firstName}!</h1>}
      <br />
      <Stack
        direction="column"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
        id="itemStack"
      >
        {sampleArr.map(function (item, index) {
          return (
            <ItemCard
              id={index}
              itemName={item.itemName}
              itemLimit={item.itemLimit}
              class="itemCard"
            />
          );
        })}
        <Link to="/submitted">
          <Button variant="contained" id="submit" onClick={submitAll}>
            Submit
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export { itemsObj };

export default Form;
