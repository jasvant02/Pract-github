import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Publisher = () => {
  const navigate = useNavigate();

  const [search, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/Available/${search}`);
  };

  return (
    <>
      <div>
        <h1>Publishing Companies</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <button onClick={() => navigate("/")}>Go to book list</button>
    </>
  );
};
