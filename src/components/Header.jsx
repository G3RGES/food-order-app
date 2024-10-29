import { useContext } from "react";
import Logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const { items } = useContext(CartContext);
  const totalCartItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={Logo} alt="resturant logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};

export default Header;
