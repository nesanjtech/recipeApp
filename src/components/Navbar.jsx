import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Navbar = () => {
  const {cartCount} = useContext(CartContext)
    return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-danger shadow-lg">
      <div className="container d-flex justify-content-between">
           <Link
          className="navbar-brand fw-bold text-light"
          to={`/`}
        >
          RecipeHub
        </Link>
        <div className="d-flex gap-4">
          <div className="cart position-relative d-sm-none">
          <Link to={'./cart'} className="cartIcon text-light fs-2"><i class="bi bi-save2"></i></Link>
        <span className="position-absolute top-25 mt-1 translate-middle text-dark rounded-5 badge bg-warning">{cartCount}</span>
        </div>
          <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <Link className="nav-link text-light" to={`/`}>
              Home
            </Link>
            <Link
              className="nav-link text-light"
              to={`/recipes`}
            >
              Recipes
            </Link>
            <Link
              className="nav-link text-light"
              to={`/contact`}
            >
              Contact
            </Link>            
          </div>
        </div>
        <div className="cart position-relative d-none d-sm-block">
          <Link to={'./cart'} className="cartIcon text-light fs-2"><i class="bi bi-cart4"></i></Link>
        <span className="position-absolute top-25 mt-2 translate-middle text-dark rounded-5 badge bg-warning">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
