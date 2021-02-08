import { useState, useEffect } from 'react';
import React from 'react';
import CardPet from './components/CardPet';
import SelectPet from './components/SelectPet';
import getDog from './helpers/getDog';

const initialDog = {
  image: "http://images2.fanpop.com/images/photos/6300000/Siberian-Husky-Pups-dogs-6390616-1280-800.jpg",
  breed: {
    id: 1,
    name: "Siberian Dog",
  },
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const[loading, setLoading] = useState(true);

  useEffect( () => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    getDog(breedId)
      .then( (newDog) => {
        setDog(newDog);
      })
  }

  return (
    <div className="app">
      <SelectPet updateDog={updateDog}/>
      <CardPet dog={dog} updateDog = {updateDog} loading={loading}/>
    </div>
  );
}

export default App;