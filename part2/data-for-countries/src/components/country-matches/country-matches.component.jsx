import React from 'react'

const CountryMatches = ({ matches, countrySearch, setCountrySearch }) => {

  return (
    <div>
    {
      (matches.length > 10 && countrySearch.length === 0)
      ? <p></p>
      : (matches.length > 10)
      ? <p>Too many results, be more specific!</p>
      : matches.map(country =>
        <div key={country.alpha3Code}>
          <span>{country.name}</span>
          <button onClick={() => setCountrySearch(country['name'].toLowerCase())}>show</button>
        </div>
        )
    }
    </div>
  )
}

export default CountryMatches