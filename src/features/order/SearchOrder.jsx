import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="px-3 py-2 text-sm bg-slate-100
        rounded-full placeholder:text-slate-400
        shadow-lg shadow-black/30
        w-50 sm:w-58 sm:focus:w-68
        focus:outline-none focus:ring focus:ring-slate-500 focus:ring-opacity-30
        focus:w-58"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
