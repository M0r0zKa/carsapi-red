import React from 'react';
import CarForm from "./components/CarForm";
import Cars from "./components/Cars";

function App(props) {
  return (
      <div>
        <CarForm/>
          <hr/>
          <Cars/>
      </div>
  );
}

export default App;
