import React from 'react';


function addCommas(number) {
    // Convert the number to a string
    const numString = number.toString();
  
    // Use regular expression to add commas
    const formattedNumber = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    return formattedNumber;
  }

  export default addCommas;