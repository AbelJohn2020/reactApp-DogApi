import { useState, useEffect } from "react";
import React from 'react';
import getBreeds from '../helpers/getBreeds';
import Error from './Error'

const initialBreeds = [
    {
        id: 1,
        name: 'Boxer',
    },
    {
        id: 2,
        name: 'Siberian',
    },
];

const SelectPet = ({ updateDog }) => {
    const [breeds, setBreeds] = useState(initialBreeds);
    const [error, setError] = useState(null);

    useEffect(() => {
        updateBreeds();
    }, []);

    const updateBreeds = () => {
        getBreeds()
            .then( (newBreeds) => {
                setBreeds(newBreeds);
            })
            .catch((error) => { 
                console.log(error); //only for developers
                setError("Error to loading breeds"); //to users
            })
    }

    return (
        < >
            <select onChange={(e) => updateDog(e.target.value)}>
                {breeds.map( breed => (
                    <option value={breed.id} key={breed.id}>{breed.name}</option>
                ))}
            </select>
            {error && <Error error={error} />}
        </>
    )
}

export default SelectPet
