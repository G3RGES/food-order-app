import useHttp from "../hooks/useHttp";
import Meal from "./Meal";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    error,
    loading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  // console.log(loadedMeals);

  if (loading) {
    return <p>Loading...</p>;
  }

  // if (!loadedMeals) {
  //   return <p>No meals found.</p>;
  // }

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
