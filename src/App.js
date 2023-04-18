import React, { useState } from 'react';
import Navbar from './components/navbar';
import FoodItemCard from './components/fooditemcard';
import Locationfilter from './components/locationfilter';
import './App.css'
import foodItemshold from './fooditems';
import Header from './components/header';
import RecommendedFoods from './components/recommendedfoods';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [foodItems, setFoodItems] = useState(foodItemshold);


  const filteredFoodItems = foodItems
  .filter((foodItem) => foodItem.location === selectedCity)
  .filter((foodItem) => foodItem.name.toLowerCase().includes(searchQuery.toLowerCase()));


  return ( 
    <div className="App">
      <Header/>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Locationfilter selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      {selectedCity ? (<>
        <h2 className='recommended'>Popular Foods in {selectedCity}</h2>
        <div className='gridcontainer'>
          {filteredFoodItems.map((foodItem) =>(
            <FoodItemCard
              key={foodItem.name}
              foodItem={foodItem}
              deliveryApps={foodItem.deliveryApps}
            />
          ))}
        </div>
        </>
      ) : (
        <>
        <h2 className='recommended'>Recommended Popular Foods</h2>
        <div className='gridcontainer'>
        <RecommendedFoods />
        </div>
        </>
      )}
    </div>
  );
};


export default App;
