import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export const Publisher = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const allItems = ["abc", "def", "ghi", "jkl", "mno"];
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/searchResults?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <>
      <div>
        <h1>Publishing Companies</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div>
        {filteredItems.length > 0 ? (
          <ul>
            {filteredItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No results found for "{searchQuery}".</p>
        )}
      </div>
      <button onClick={() => navigate("/")}>Go to book list</button>
    </>
  );
};
