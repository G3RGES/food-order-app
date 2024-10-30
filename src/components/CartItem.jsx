import { currencyFormatter } from "../util/formatting";

const CartItem = ({ name, quantity, price }) => {
  return (
    <li className="cart-item">
      <p>
        {name}-{quantity} X {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </p>
    </li>
  );
};

export default CartItem;
