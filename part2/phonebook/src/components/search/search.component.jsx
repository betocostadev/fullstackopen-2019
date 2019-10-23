import React from 'react'

import './search.styles.css'
import CustomButton from '../custom-button/custom-button.component'

const Search = ({ searchName, handleSearchName, resetSearchName}) => {
  return (
    <div className='searchContainer'>
      <h3>Seach by name</h3>
      <form>
        <label>
          Name:
          <input className='search-box' type="text" value={searchName} onChange={handleSearchName} />
        </label>
        <CustomButton onClick={resetSearchName} isClose> × </CustomButton>
      </form>
    </div>
  )
}

export default Search