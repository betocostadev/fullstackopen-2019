import React, { useState, useEffect } from 'react'
import './App.css'

import axios from 'axios'

// Components
import Search from './components/search/search.component'
import AddNewPerson from './components/add-new-person/add-new-person.component'
import Numbers from './components/numbers/numbers.component'

function App() {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  // useEffect to run axios and fetch data from db.json (json server at localhost://3001)
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  const handleSearchName = event => {
    event.preventDefault()
    if (event.target.value.length > 0) {
      setShowAll(false)
      setSearchName(event.target.value)
    } else {
      setShowAll(true)
      setSearchName('')
    }
    console.log(searchName)
  }
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    // Check if there is a person with the new name
    const existingPersons = persons.find(person => person.name === newName)
    if (newNumber.length === 0) {
      return alert(`Please, add a phone number!`)
    }
    if (existingPersons) {
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
      setNewNumber('')
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Search searchName={searchName} handleSearchName={handleSearchName}/>
      <AddNewPerson
        newName={newName}
          newNumber={newNumber}
            handleNewName={handleNewName}
              handleNewNumber={handleNewNumber}
                addPerson={addPerson}
      />
      <Numbers personsToShow={personsToShow} />
    </div>
  );
}

export default App;
