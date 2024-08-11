// import React from 'react';
// import { useSnapshot } from 'valtio';
// import logoState from '../state/logoState';

// const ColorPickerAPI = ({ onColorChange }) => {
//   const [color, setColor] = React.useState('#000000');
//   const handleChange = (e) => {
//     setColor(e.target.value);
//     onColorChange(e.target.value);
//   };

//   return (
//     <div>
//       <input type="color" value={color} onChange={handleChange} />
//     </div>
//   );
// };

// export default ColorPickerAPI;


import React, { useState } from 'react'
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'
import logoState from '../state/logoState';
import { useSnapshot } from 'valtio';

const ColorPickerAPI = (props) => {
  const state=useSnapshot(logoState);
  const [color, setColor] = useState('linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)');
  const { gradientType, setLinear, setRadial, addPoint, deletePoint, degrees, setDegrees, setPointLeft, currentLeft, selectedPoint } = useColorPicker(color, setColor);
  const handleChange = (e) => {
    setColor(e);
    props.onColorChange(e);
    logoState.gradientType=gradientType;
    console.log("e: "+gradientType);
  };



  return(
    <div>
      {/* {gradientType === 'linear-gradient' && <input value={degrees} onChange={(e) => setDegrees(e.target.value)} />}
      <input value={currentLeft} onChange={(e) => setPointLeft(e.target.value)} /> */}
      <ColorPicker value={color} onChange={handleChange} />
    </div>
   )
}

export default ColorPickerAPI
