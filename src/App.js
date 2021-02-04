import React from 'react';
import CardPet from './components/CardPet';
import SelectPet from './components/SelectPet';

function App() {
  return (
    <div className="app">
      <SelectPet/>
      <CardPet/>
    </div>
  );
}

export default App;