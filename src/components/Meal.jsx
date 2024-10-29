import { useContext } from "react";
import { currencyFormatter } from "./../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Meal = ({ mealImg, name, price, description, meal }) => {
  const { addItem } = useContext(CartContext);

  function addMealToCart() {
    addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${mealImg}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-meal-item-actions">
          <Button onClick={() => addMealToCart()}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
};

export default Meal;
