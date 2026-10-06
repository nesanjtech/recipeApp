import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRatingColor } from "../utils/rating";
import { CardButton } from "../components/CardButton";
import { RecipeContext } from "../context/RecipeContext";
import LoadingSpinner from "../components/LoadingSpinner";

const RecipeDetails = () => {
  const [getRecipe, setGetRecipe] = useState([]);
  const {loading} = useContext(RecipeContext)
  const param = useParams();
  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchById = await fetch(
        `https://dummyjson.com/recipes/${param.id}`,
      );
      const response = await fetchById.json();
      setGetRecipe(response);
    };
    fetchRecipe();
  }, [param]);

  if(loading) return <LoadingSpinner />

  return (
    <div className="container p-4 d-flex flex-column gap-2">
          <div className="d-flex gap-2">
            <span className="d-flex flex-column text-dark-emphasis">
              <span className="h2 mb-0">{getRecipe.name}</span>
            <small>{getRecipe?.mealType?.join(", ")}</small>
            </span>
            <div className="m-2 gap-1 col-3 text-end h-50">
              <small
                className={`text-light rounded-1 p-1 ${getRatingColor(getRecipe.rating)}`}
              >
                {getRecipe.rating}
                <i className="bi bi-star-fill p-1"></i>
              </small>
              <div>
                <small className="fw-bold border-bottom">{getRecipe.reviewCount}{" "}</small>
                <small className="fst-italic border-bottom text-secondary">
                Reviews
              </small>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <span className="text-secondary">
              {getRecipe.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-warning text-dark-emphasis p-2 m-1"
                >
                  {tag}
                </span>
              ))}
            </span>
            <div className="p-1 gap-2 d-flex text-light">
              <small className="bg-danger rounded p-1 px-2">
                ⏱️ {getRecipe.prepTimeMinutes} mins
              </small>
              <small className="bg-danger rounded p-1 px-2">
                🍽️ Serving {getRecipe.servings}
              </small>
              <small className="bg-danger rounded p-1 px-2">
                🔥 Calories: {getRecipe.caloriesPerServing}
              </small>
            </div>
      </div>
      <div className="card-gradient mt-4 p-3 d-flex flex-column rounded-5 shadow-lg flex-lg-row gap-5">
        <div className="col-12 col-lg-4">
          <img
            className="rounded-5 shadow"
            loading="lazy"
            src={getRecipe.image}
            alt={getRecipe.name}
            width="100%"
            onLoad={loading && <LoadingSpinner />}
          />
          <div className="mt-4 d-flex justify-content-center">
          <CardButton recipe={getRecipe} />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div>
            <p className="h3 text-danger">Instructions</p>
            <ul className="list py-2">
              {getRecipe.instructions?.map((instruction, index) => (
                <li key={index} className=" text-secondary">
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="h3 text-danger">Ingredients</p>
            <div className="d-flex flex-wrap py-2">
              {getRecipe.ingredients?.map((instruction, index) => (
                <span
                  key={index}
                  className="badge bg-success text-light p-2 m-1"
                >
                  {instruction}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
