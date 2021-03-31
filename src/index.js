import React from 'react';
import ReactDom from 'react-dom';
//using Javascript Expression

const fname = "Varun Sareen";

ReactDom.render(
  <>
  <h1>My name is {fname}</h1> 
  </>,
  document.getElementById('root')
);