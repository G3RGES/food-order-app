import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.item[existingItemIndex];

    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(CartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
