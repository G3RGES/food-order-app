import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";

const Checkout = () => {
  const { items } = useContext(CartContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  return (
    <Modal>
      <form className="">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input label="Full Name" id="full-name" type="text" required />
        <Input label="E-Mail" id="email" type="email" required />
        <Input label="Street Address" id="street" type="text" required />

        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" required />
        </div>

        <p className="modal-actions">
          <button type="submit">Place Order</button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
