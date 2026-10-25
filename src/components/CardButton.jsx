import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CardButton = ({ recipe, isCartPage = false }) => {
  const { cart, addToCart, decreaseQuantity } =
    useContext(CartContext);

  const isInCart = cart.some(
    (item) => item.id === recipe.id
  );

  const handleClick = () => {
    if (isInCart) {
      if (isCartPage) {
        decreaseQuantity(recipe.id);
      }
      return;
    }

    addToCart(recipe);
  };

    const buttonText = isCartPage
    ? "Remove"
    : isInCart
      ? "Saved"
      : "Save Recipe";

  return (
    <button
      type="button"
      className={`btn d-flex w-100 justify-content-center m-auto shadow rounded-3 ${
        isInCart
          ? "bg-danger text-light"
          : "btn-danger text-light"
      }`}
      onClick={handleClick}
      disabled={isInCart && !isCartPage}
    >
      {buttonText}
    </button>
  );
};

