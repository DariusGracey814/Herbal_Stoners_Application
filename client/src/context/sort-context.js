import { createContext, useState } from "react";

export const SortContext = createContext({
  sort: false,
  setSortProducts: () => {},
});

function SortCartProvider({ children }) {
  const [sortOption, setSortOption] = useState(false);

  // Set sort products state
  function setSortProducts(state) {
    console.log("Sort state: ", state);
    state ? setSortOption(true) : setSortOption(false);
  }

  const sortItems = {
    sort: sortOption,
    setSortProducts,
  };

  return (
    <SortContext.Provider value={sortItems}>{children}</SortContext.Provider>
  );
}

export default SortCartProvider;
