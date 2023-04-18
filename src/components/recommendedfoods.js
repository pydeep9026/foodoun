import FoodItemCard from './fooditemcard';
import   popularFoodItems  from '../fooditems';


const RecommendedFoods = () => {
  const recommendedItems = [];

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * popularFoodItems.length);
    recommendedItems.push(popularFoodItems[randomIndex]);
  }

  return (
    <>
        {recommendedItems.map((foodItem) => (
          <FoodItemCard
            key={foodItem.name}
            foodItem={foodItem}
            deliveryApps={foodItem.deliveryApps}
          />
        ))}
    </>
  );
};

export default RecommendedFoods;
