import React, { useState } from 'react'
import ColorBlock from './component/ColorBlock';
import ColorForm from './component/ColorForm';

function App() {
  let [colors, setColors] = useState(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  
  const colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })

  

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
