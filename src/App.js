import React, {useState} from 'react';
import './App.css';

function App() {
    const [isLightOn, toggleIsLightOn] = useState(false);
    function handleClick() {
        toggleIsLightOn(!isLightOn);
    }
  return (
    <div>
      <button
          type="button"
          onClick={handleClick}
      >
          {isLightOn === true ? "Zet het licht uit" : "Zet het licht aan"}
      </button>
    </div>
  );
}

export default App;
