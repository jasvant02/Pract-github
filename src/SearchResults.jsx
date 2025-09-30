import React from "react";
import { useParams } from "react-router-dom";

export const SearchResults = () => {
  const { searchQuery } = useParams();
  const allItems = ["abc", "def", "ghi", "jkl", "mno"];
  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Avalaible : {searchQuery}</h2>
      {filteredItems && (
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
