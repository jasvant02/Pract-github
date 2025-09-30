import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publisher = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/searchResults/${encodeURIComponent(searchQuery.trim())}`);
    }
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

      <button onClick={() => navigate("/")}>Go to book list</button>
    </>
  );
};
