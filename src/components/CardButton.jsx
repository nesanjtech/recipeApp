import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const CardButton = ({ recipe, isCartPage = false }) => {
    const [loading, setLoading] = useState(false)
  const { cart, addToCart, decreaseQuantity } =
    useContext(CartContext);

  const isInCart = cart.some(
    (item) => item.id === recipe.id
  );

  const handleClick = () => {
    setLoading(true)
    if (isInCart) {
      if (isCartPage) {
        setTimeout(() => {
            decreaseQuantity(recipe.id);
        },500)
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
      {loading && buttonText=== "Remove" ? "Removing..." : buttonText}
    </button>
  );
};

