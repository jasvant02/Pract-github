import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const SearchResults = () => {
  const { search } = useParams();
  const navigate = useNavigate();
  // const allItems = ["abc", "def", "ghi", "jkl", "mno"];
  // const filteredItems = allItems.filter((item) => item.includes(search));

  return (
    <div>
      <h2>Avalaible Publishers : {search}</h2>
      {/* {filteredItems && (
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )} */}

      <button onClick={() => navigate(-1)}>return</button>
    </div>
  );
};
