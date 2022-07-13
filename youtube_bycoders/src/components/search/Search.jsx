import React, { useContext } from 'react';
import './search.css'

const Search = ({type, placeholder, name}) => {
 
  const submitSearch = async() => {
    window.location.href = '/search'
  }

  const handleSearch = (e) => {
    localStorage.setItem('search', e.currentTarget.value)
    console.log(e.currentTarget.value)
  }

  return (
    <div className="searchComponent_container">
      <input
        className='form_input'
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleSearch}
      />

      <button onClick={submitSearch}  className="search_button"><span>Find Here</span></button>
    </div>
  )
}

export default Search;