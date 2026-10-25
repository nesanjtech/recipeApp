const BASEURL = "https://dummyjson.com/recipes";
// const BASEURL = "http://localhost:5000/api/recipes";

export const getRecipes = async (limit, skip = 0) => {
  const response = await fetch(`${BASEURL}?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
};

export const getRecipeById = async (id) => {
  const response = await fetch(`${BASEURL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch recipe with id ${id}`);
  }
  return response.json();
};

export const getAllRecipes = async () => {
  const response = await fetch(`${BASEURL}?limit=50`);
  if (!response.ok) {
    throw new Error("Failed to fetch all recipes");
  }
  return response.json();
};
