import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import './Form.css';
import { useAuth } from "../AuthContext";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

/**
 * Form page containing form with school items for teacher.
 * 
 * @returns {Object} - Page containing form.
 * */

const ItemCard = (props) => {
  const [isPack, setIsPack] = useState(false);
  const [numItems, setNumItems] = useState(0);

  function incrementUp(){
    checkValue(numItems + 1);
    setNumItems(numItems + 1);
  }g

  function incrementDown(){
    checkValue(numItems - 1);
    setNumItems(numItems - 1);
  }
  
  function checkValue(target){
    if (target > props.itemLimit){
      document.getElementById(`limit${props.id}`).style.color = 'red';
    } else {
      document.getElementById(`limit${props.id}`).style.color = 'black';
    }
  }

  return(
    <Card variant='outlined'>
      <CardContent>
        <h1>
          {props.itemName}
        </h1>
        <h5 id={`limit${props.id}`}>Limit: {props.itemLimit}</h5>
        <Button variant='outlined' size='small' onClick={incrementDown}>-</Button>
        <input type='number' name={props.itemName} id={props.itemName} value={numItems} onChange={(e) => {setNumItems(e.target.value); checkValue(e.target.value)}}></input>
        <Button variant='outlined' size='small' onClick={incrementUp}>+</Button>
      </CardContent>
    </Card>
  )
}

const sampleJson = {
  'itemName': 'Pencils',
  'itemLimit': 10
}
const sampleArr = [sampleJson, sampleJson, sampleJson, sampleJson, sampleJson]

const Form = () => {
  const { teacher } = useAuth();
  return (
    <div className="centered">
    {teacher && <p>Hello, {teacher.firstName}!</p>}
      <br />
      {sampleArr.map(function(item, index){return (<ItemCard itemName={item.itemName} itemLimit={item.itemLimit} id={index}/>)})}
      <Link to="/submitted"><button>Submit</button></Link>
    </div>
  );
};

export default Form;