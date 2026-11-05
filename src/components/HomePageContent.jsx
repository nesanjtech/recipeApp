import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { getAllRecipes } from "../services/recipeServices";
import { useNavigate } from "react-router-dom";

const HomePageContent = () => {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const scrollRefs = useRef({})

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await getAllRecipes();
        setRecipe(data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  const handleScroll = (mealType, direction) => {
    const container = scrollRefs.current[mealType];

    if(container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth"
      })
    }
  }

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
            <div className="d-flex">
              <span
              onClick={() => handleScroll(mealType, "left")}
              aria-label={`Scroll ${mealType} left`}
              className="d-flex align-items-center mx-2"
            >
              <i className="bi bi-caret-left-fill text-danger rounded-5 btn-scroll d-none d-lg-block"></i>
            </span>
            <div className="card-home-container container d-flex gap-4 rounded-4 shadow-bottom" ref={(element) => {
                scrollRefs.current[mealType] = element;
              }}> 
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
             <span
              onClick={() => handleScroll(mealType, "right")}
              aria-label={`Scroll ${mealType} left`}
              className="d-flex align-items-center mx-2"
            >
              <i className="bi bi-caret-right-fill text-danger rounded-5 btn-scroll d-none d-lg-block"></i>
            </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePageContent;
