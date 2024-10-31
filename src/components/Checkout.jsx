import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Modalcontext from "../store/ModalContext";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { items, clearCart } = useContext(CartContext);
  const { hideCheckout, progress } = useContext(Modalcontext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const hideCheckoutModal = () => {
    hideCheckout();
  };

  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );
  };

  const handleClose = () => {
    hideCheckout();
  };

  const handleFinish = () => {
    hideCheckout();
    clearCart();
    clearData();
  };

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Loading...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={hideCheckoutModal}>
        <h2>Success</h2>
        <p>Order submied successfuly</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"} onClose={hideCheckoutModal}>
      <form className="" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input label="Full Name" id="name" type="text" required />
        <Input label="E-Mail" id="email" type="email" required />
        <Input label="Street Address" id="street" type="text" required />

        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" required />
        </div>

        {error && <Error title="Failed to submit order" message={error} />}

        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
