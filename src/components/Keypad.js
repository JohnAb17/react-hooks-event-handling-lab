// Code Keypad Component Here

// function Keypad (){
//     return (
//         <div></div>
//     )
// }

// export default Keypad;

import React from 'react';

const Keypad = () => {
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input type="password" onChange={handleChange} />
    </div>
  );
};

export default Keypad;