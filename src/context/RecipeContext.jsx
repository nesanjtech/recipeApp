import { createContext, useState, useEffect } from "react";
import { getRecipes } from "../services/recipeServices";
import { useDebounce } from "../hooks/useDebounce";

// eslint-disable-next-line react-refresh/only-export-components
export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  const debounceSearch = useDebounce(search, 1000)

  const limit = 8;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes(limit, skip);
        setRecipeData((prev) => [...prev, ...data.recipes]);
        setTotal(data.total);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [skip]);

  return (
    <RecipeContext.Provider
      value={{
        recipeData,
        loading,
        error,
        skip,
        setSkip,
        total,
        limit,
        search,
        setSearch,
        debounceSearch
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
