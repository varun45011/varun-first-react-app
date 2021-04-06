import React from 'react';

function Greet(){
    let message = ''; //Define message
    let curdate = new Date().getHours(); //get hours
    if(curdate >= 1 && curdate < 12){
        message = 'Good Morning';
      }
      else if(curdate >= 12 && curdate < 19) {
        message = 'Good Afternoon';
      }
      else{
        message = "Good Night";
      }
  
    return <h1 >Hello Sir/Madam, <span >{message}</span></h1>;
}

export default Greet;