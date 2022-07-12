import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import './search.css'

const Search = ({type, placeholder, name}) => {
 

  const { setSearchValue, setSearchBarItems, searchBarItems } = useContext(SearchContext);

  const submitSearch = async() => {
    const searchID = document.getElementById('search').value;

    setSearchBarItems(searchID);
    await setSearchValue(searchID);

    window.location.href = '/search'
  }

  return (
    <div className="">
      <input
        className='form_input'
        type={type}
        placeholder={placeholder}
        name={name}
        id="search"
      />

      <button onClick={submitSearch} className="search_button"><h4>search</h4></button>
    </div>
  )
}

export default Search;