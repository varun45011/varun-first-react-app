import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
// Template literals

const fname = "Varun ";
const lname = "Sareenasldjlksaj";

ReactDom.render(
  <>
  <h1 id="first_class">{`My name is ${fname} ${lname}`}</h1> 
  </>,
  document.getElementById('root')
);

//date and time
/** 
const d = new Date().toLocaleDateString();
const t = new Date().toLocaleTimeString();

ReactDom.render(
  <>
  <p>Todays date is {d}</p>
  <p>Todays Time is {t}</p>
  </>,
  document.getElementById("root")
);**/

