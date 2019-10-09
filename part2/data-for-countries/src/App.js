import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
import './App.css'

import axios from 'axios'

import CountryDisplay from './components/country-display/country-display.component'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ countrySearch, setCountrySearch ] = useState('')

  const handleCountrySearch = event => {
    console.log(event.target.value)
    setCountrySearch(event.target.value.toLowerCase())
  }

  const searchResults = countries.filter(country => country.name.toLowerCase().includes(countrySearch))

  useEffect(() => {
    console.log('Effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // const match = response.data.filter(country => country.name.toLowerCase().includes(findCountry))
        setCountries(response.data)
        console.log(response.data)
      })
  },[]);

  /* let ResultsDisplay;
  console.log(searchResults.length)

  if (searchResults.length === 250) {
    ResultsDisplay = <p></p>
  } else if (searchResults.length > 0 && searchResults.length <=10) {
    ResultsDisplay = searchResults.map(country => <p key={country.name}>{country.name}</p>)
  } else {
    ResultsDisplay = <p>Too many matches, be more specific</p>
  } */
  // onClick={() => setCountrySearch(country['name'])}>

  // if (searchResults.length === 1 && countrySearch === searchResults[0].name.toLowerCase()) {
  //   setCountryMatch(searchResults[0].name)
  //   console.log('country: ', countryMatch)
  // }

  return (
    <div className="App">
      <header>
       <h1>Data for Countries</h1>
      </header>
      <h2>Search for countries</h2>
      <form>
        <label>
          Find countries:
          <input type="text" value={countrySearch} onChange={handleCountrySearch} />
        </label>
      </form>
      {
        (searchResults.length > 10 && countrySearch.length === 0)
        ? <p></p>
        : (searchResults.length > 10)
        ? <p>Too many results, be more specific!</p>
        : searchResults.map(country =>
          <p key={country.name}>{country.name}</p>)
      }
      {
        searchResults.length === 1
        ? <CountryDisplay country={searchResults[0]}/>
        : <p>NO!</p>
      }

    </div>
  );
}

export default App;
