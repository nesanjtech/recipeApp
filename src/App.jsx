import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import { RecipeProvider } from "./context/RecipeContext";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = lazy(() => import("./pages/Home"))
const RecipeDetails = lazy(() => import("./pages/RecipeDetails"))
const Recipes = lazy(() => import("./pages/Recipes"))
const Contact = lazy(() => import("./pages/Contact"))

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <RecipeProvider> 
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
          </Suspense>
        </RecipeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
