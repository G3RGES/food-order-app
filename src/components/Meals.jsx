import { useEffect } from "react";

const Meals = () => {
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        // if (!response.ok) {
        // }
        const data = await response.json();
        //console.log(data);//*TESTING
      } catch (error) {}
    }
    fetchMeals();
  }, []);

  return <ul id="meals">Meals</ul>;
};

export default Meals;
