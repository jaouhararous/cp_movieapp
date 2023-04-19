import React from 'react'
import Stars from './Stars'
//the footer and tsearch

const Search = ({search,handleSearch,stars,handleStars}) => {
  return (
    <div className='bar'>
        <h1 className='maintitle'>MY MOVIES LIBRARY</h1>
      <form  className='searchinput'>
        <input type="text" name="search" value={search} onChange={handleSearch}/>
        <button type="submit">Search</button>
        <Stars rating={stars} handleStars={handleStars}/>
      </form>
    </div>
    
  )
}

export default Search