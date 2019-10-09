import React from 'react'
import './country-display.styles.css'

const CountryDisplay = ({ country }) => {
  console.log(country)
  return (
    <div>
      <section>
        <h2>{country.name}</h2>
        <p>Capitol: {country.capital}</p>
        <p>Population: {country.population}</p>
      </section>
      <section>
        <h3>Languagues</h3>
        <ul>
          {
            country.languages.map(language => <li key={language['iso639_2']}>{language.name}</li>)
          }
        </ul>
      </section>
      <section>
        <img className='country-flag' src={country.flag} alt={`${country.name} country flag`} />
      </section>
    </div>
  )
}

export default CountryDisplay