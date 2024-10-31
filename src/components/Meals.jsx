import useHttp from "../hooks/useHttp";
import Error from "./Error";
import Meal from "./Meal";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    error,
    loading,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  // console.log(loadedMeals); //* TESTING

  if (loading) {
    return <p className="center">Loading...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

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
