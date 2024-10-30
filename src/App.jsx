import Cart from "./components/Cart";
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
        <Cart />
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
