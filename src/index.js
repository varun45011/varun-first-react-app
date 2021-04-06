import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';

// Template literals

/**const fname = "Varun ";
const lname = "Sareenasldjlksaj";

ReactDom.render(
  <>
  <h1 id="first_class">{`My name is ${fname} ${lname}`}</h1> 
  </>,
  document.getElementById('root')
);**/

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


//Create Greeting Card to show Good morning, Night , aftrenoon.
/*let message = ''; //Define message
let curdate = new Date().getHours(); //get hours

//Inline Styliing Start here 
const greethead = {
  textAlign: 'center',
  background : '#ff5959bd',
  padding : '20px',
  borderRadius : '10px',
  display : 'table',
  margin : 'auto',
  color : '#fff',
};
const inner_span = {};

//Inline Styling End 

//Condition Start Here 
if(curdate >= 1 && curdate < 12){
  message = 'Good Morning';
  inner_span.color = 'lightgreen';
}
else if(curdate >= 12 && curdate < 19) {
  message = 'Good Afternoon';
  inner_span.color = 'orange';
}
else{
  message = "Good Night";
  inner_span.color = '#000';
}
// Condition End*/

//Render Start 
ReactDom.render(
  <>
  <App />
  </>
  , document.getElementById('root')
);
