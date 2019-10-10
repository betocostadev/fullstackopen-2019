import React from 'react'

import './country-matches.styles.css'

const CountryMatches = ({ matches, countrySearch, setCountrySearch }) => {

  return (
    <ul className='container__countries'>
    {
      (matches.length > 10 && countrySearch.length === 0)
      ? <li className='matching-countries'></li>
      : (matches.length > 10)
      ? <li className='matching-countries'>Too many results, be more specific!</li>
      : (matches.length === 1)
      ? <li className='matching-countries'></li>
      : matches.map(country =>
        <li className='matching-countries' key={country.alpha3Code}>
        {country.name}
        <button className='btn-country-select' onClick={() => setCountrySearch(country['name'].toLowerCase())}>show</button>
        </li>
      )
    }
    </ul>
  )
}

export default CountryMatches