import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Modalcontext from "../store/ModalContext";

const Checkout = () => {
  const { items } = useContext(CartContext);
  const { hideCheckout, progress } = useContext(Modalcontext);

  const hideCheckoutModal = () => {
    hideCheckout();
  };

  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  const closeCart = () => {};

  return (
    <Modal open={progress === "checkout"} onClose={closeCart}>
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
          <Button type="button" textOnly onClick={hideCheckoutModal}>
            Close
          </Button>
          <Button type="submit">Place Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export default Checkout;
