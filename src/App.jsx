import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { ModalContextProvider } from "./store/ModalContext";

function App() {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Checkout />
        <Cart />
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
