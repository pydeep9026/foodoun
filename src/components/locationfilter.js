import React from 'react';
import {cities, logos} from '../assets/assets'

const Locationfilter = ({ selectedCity, setSelectedCity }) => {
    const citydetails = [
      { name: "Bangalore", image: cities.bengaluru },
      { name: "Hyderabad", image: cities.hyderabad },
      { name: "Ahmedabad", image: cities.ahmedabad },
      { name: "Chennai", image: cities.chennai },
      { name: "Mumbai", image: cities.mumbai },
      { name: "Kolkata", image:   cities.kolkata },
      { name: "Pune", image:  cities.pune },
      { name: "Delhi", image: cities.delhi },
      { name: "Jaipur", image:  cities.jaipur },
      { name: "Lucknow", image: cities.lucknow },
    ];


  return (<>
    <label>Choose a city:</label>
<div className='citymap'>
  {citydetails.map((city) => (
    <label key={city.name} className={`citylocation ${selectedCity === city.name ? 'selectedcityy' : ''}`}>
      <input
        type="radio"
        name="city"
        value={city.name}
        checked={selectedCity === city.name}
        onChange={() => setSelectedCity(city.name)}
        style={{ display: "none" }}
      />
      <img
        src={city.image}
        alt={city.name}
        width="60"
        height="60"
        style={{ cursor: "pointer" }}
        onClick={() => setSelectedCity(city.name)}
      />
      {city.name}
    </label>
  ))}
</div>
</>
  );
};

export default Locationfilter;