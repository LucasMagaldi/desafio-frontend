import React, { useState } from "react";
import mainAPI from "../services/axiosApi";

export const SearchContext = React.createContext(); 

const SearchContextProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchItems, setSearchItems] = useState([]);
    const [searchBarItems, setSearchBarItems] = useState([]);


    const getSearchResult = async () => {
        
        const res = await mainAPI.get('/search', {
          params: {
          q: localStorage.getItem('search'),
          maxResults: 20
          }
        });
        console.log(res)
        let items = res.data.items;
        setSearchItems(items);
      }

    return (
        <SearchContext.Provider value={{
            setSearchBarItems,
            searchBarItems,
            searchValue, 
            setSearchValue, 
            getSearchResult, 
            searchItems
            }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider;