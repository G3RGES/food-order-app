import { currencyFormatter } from "./../util/formatting";
const Meal = ({ mealImg, name, price, description }) => {
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
          <button>Add to cart</button>
        </p>
      </article>
    </li>
  );
};

export default Meal;
