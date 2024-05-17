import { createContext, useContext, useState } from "react";
const SearchContext = createContext();

export const SearchDataProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [tagValue, setTagValue] = useState(" ");
  return (
    <SearchContext.Provider
      value={{
        tagValue,
        searchValue,
        setTagValue,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export const useSearch = () => useContext(SearchContext);
