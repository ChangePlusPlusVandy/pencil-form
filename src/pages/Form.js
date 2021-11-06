import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import './Form.css';
import { useAuth } from "../AuthContext";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

/**
 * Form page containing form with school items for teacher.
 * 
 * @returns {Object} - Page containing form.
 * */

const ItemCard = (props) => {
  const [isPack, setIsPack] = useState(false);

  return(
    <Card variant='outlined'>
      <CardContent>
        <h1>
          props.itemName
        </h1>
      </CardContent>
    </Card>
  )
}

const Form = () => {
  const { teacher } = useAuth();
  return (
    
    <div className="centered">
    {teacher && <p>Hello, {teacher.firstName}!</p>}
      <br />
      <ItemCard />
      <Link to="/submitted"><button>Submit</button></Link>
    </div>
  );
};

export default Form;