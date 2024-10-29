import { useEffect, useState } from "react";
import Meal from "./Meal";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        // if (!response.ok) {
        // }

        const meals = await response.json();
        setLoadedMeals(meals);

        //console.log(meals);//*TESTING
      } catch (error) {}
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <Meal
          meal={meal}
          key={meal.id}
          mealImg={meal.image}
          name={meal.name}
          price={meal.price}
          description={meal.description}
        />
      ))}
    </ul>
  );
};

export default Meals;
