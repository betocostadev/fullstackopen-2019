import React from 'react'

const Search = ({ searchName, handleSearchName}) => {
  return (
    <div>
    <h3>Seach by name</h3>
      <form>
        <label>
          Name:
          <input type="text" value={searchName} onChange={handleSearchName} />
        </label>
      </form>
    </div>
  )
}

export default Search