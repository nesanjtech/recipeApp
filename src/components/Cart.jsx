import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CardButton } from "./CardButton";
import { getRatingColor } from "../utils/rating";

const Cart = () => {
  const { cart, cartCount } = useContext(CartContext);
  console.log("cart", cart);
  return (
    <div className="container mt-2">
      <div className="d-flex flex-column mx-3">
        <span className="h1 text-dark">Saved Recipe</span>
        <span className="text-secondary line-spacing-1">
          <span className="fw-bold">{cartCount}</span>{" "}
          {cartCount <= 1 ? "item" : "items"} Saved
        </span>
      </div>
      {cart.length === 0 ? (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <span className="h3 text-secondary">No Saved Recipes</span>
        </div>
      ) : (
        cart.map((cartItem) => (
          <div
            className="card mb-3 m-3 col-lg-7 rounded-5 shadow-lg"
            key={cartItem.id}
          >
            <div className="row g-2">
              <img
                src={cartItem.image}
                className="col-lg-3 rounded-5 p-2"
                alt="Image"
              />
              <div class="col-lg-8">
                <div className="card-body d-flex justify-content-around align-items-center">
                  <div className="col-8">
                    <h5 className="card-title">{cartItem.name}</h5>
                    <p className="card-text">
                      <small class="text-body-secondary">
                        {cartItem.prepTimeMinutes} mins | {cartItem.servings}{" "}
                        servings | {cartItem.caloriesPerServing} calories
                      </small>
                    </p>
                    <span
                      className={`text-light rounded-1 p-1 ${getRatingColor(cartItem.rating)}`}
                    >
                      {cartItem.rating}
                      <i className="bi bi-star-fill p-1"></i>
                    </span>
                  </div>
                  <div className="col-4">
                    <CardButton recipe={cartItem} isCartPage={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
