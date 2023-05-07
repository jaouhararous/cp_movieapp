import React from 'react'
import Stars from './Stars'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//the footer and tsearch

const Search = ({search,handleSearch,stars,handleStars}) => {
  return (
    <div className='bar'>
        <h1 className='maintitle'>MY MOVIES LIBRARY</h1>
      <form  className='searchinput'>
        <input type="text" name="search" value={search} onChange={handleSearch}/>
        <button type="submit">Search</button>
        <Stars rating={stars} handleStars={handleStars}/>
        <Link to="/">  <h2>HOME</h2>

</Link>
      </form>
    </div>
    
  )
}

export default Search