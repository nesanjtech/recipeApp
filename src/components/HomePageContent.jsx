import { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import LoadingSpinner from "./LoadingSpinner";
import { getAllRecipes } from "../services/recipeServices";
import { useNavigate } from "react-router-dom";

const HomePageContent = () => {
  const [recipe, setRecipe] = useState([]);
  const { loading } = useContext(RecipeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRecipes();
        setRecipe(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchData();
  }, []);

  const groupedRecipe = recipe.reduce((acc, recipe) => {
    recipe.mealType.forEach((type) => {
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(recipe);
    });
    return acc;
  }, {});

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className=" pt-4">
        {Object.entries(groupedRecipe).map(([mealType, recipe]) => (
          <div className="container">
            <div className="mb-4 text-danger text-center">
              <span className="h2 text-uppercase fw-bold">{mealType}</span>
            </div>
            <div className="card-home-container container d-flex gap-4 rounded-4 shadow-bottom">
              {recipe.map((recipe) => (
                <div
                  key={recipe.id}
                  className="card-scrolled d-flex gradient-overlay bg-danger flex-column gap rounded-4 shadow"
                  style={{ width: "15rem", height: "19rem" }}
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                  <img
                    src={recipe.image}
                    className="rounded-4"
                    loading="lazy"
                    alt={recipe.name}
                  ></img>
                  <small className="text-center text-wrap text-uppercase text-light p-2">
                    {recipe.name}
                  </small>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageContent;
