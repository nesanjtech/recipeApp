import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(RecipeContext);
  return (
    <div className="search-box d-flex gap-2 mx-auto col-12 col-lg-6">
      <input
        type="text"
        className="search-input p-2 text-secondary"
        placeholder="Search by name, meal, tags..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-danger">Search</button>
    </div>
  );
};

export default SearchBar;
