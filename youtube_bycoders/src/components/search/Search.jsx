import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import './search.css'

const Search = ({type, placeholder, name}) => {
 

  const { setSearchValue } = useContext(SearchContext);

  const submitSearch = async() => {
    window.location.href = '/search'
  }

  const handleSearch = (e) => {
    console.log(e.currentTarget.value)
    setSearchValue(e.currentTarget.value)
  }

  return (
    <div className="">
      <input
        className='form_input'
        type={type}
        placeholder={placeholder}
        name={name}
        id="search"
        onChange={handleSearch}
      />

      <button onClick={submitSearch}  className="search_button"><h4>search</h4></button>
    </div>
  )
}

export default Search;