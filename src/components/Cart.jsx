import { useContext, useRef } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "./../util/formatting";
import Button from "./UI/Button";
import Modalcontext from "../store/ModalContext";

const Cart = () => {
  const { items, removeItem, addItem } = useContext(CartContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  const { progress, hideCart, showCheckout } = useContext(Modalcontext);

  const hideCartModal = () => {
    hideCart();
  };

  return (
    <Modal className="cart" open={progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCartModal}>
          Close
        </Button>
        <Button>Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
