import React from "react";
import { useParams } from "react-router-dom";

export const SearchResults = () => {
  const { searchQuery } = useParams();

  return (
    <div>
      <h2>Avalaible : {searchQuery}</h2>
    </div>
  );
};
