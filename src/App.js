import { useState, useEffect } from 'react';
import React from 'react';
import CardPet from './components/CardPet';
import SelectPet from './components/SelectPet';
import getDog from './helpers/getDog';
import Error from './components/Error';

const initialDog = {
  image: " ", // http://images2.fanpop.com/images/photos/6300000/Siberian-Husky-Pups-dogs-6390616-1280-800.jpg
  breed: {
    id: 0,    // 1
    name: " ",  // Siberian Dog
  },
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const[loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( () => {
    updateDog();
  }, []);

  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then( (newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch ( (error) => {
        console.log(error);
        setError("Error to loading a dog");
        setLoading(false);
      })
  }

  return (
    <div className="app">
      <SelectPet updateDog={updateDog}/>

      {error && <Error error={error}/>}

      <CardPet dog={dog} updateDog = {updateDog} loading={loading}/>
    </div>
  );
}

export default App;