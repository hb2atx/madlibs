import React from 'react';
import addCommas from './addCommas';


function App() {
  const numberToFormat = 1234567; // Replace this with your desired number

  return (
    <div>
      <p>Formatted Number: {addCommas(numberToFormat)}</p>
    </div>
  );
}

export default App;


