import React, { useState } from 'react';
import './App.css';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Branlas Lacenon', number: '12-43-234345', id: 4 }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName] = useState('')
  const [ showAll, setShowAll ] = useState(true)

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
    <h3>Seach by name</h3>
    <form>
      <label>
        Name:
        <input type="text" value={searchName} onChange={handleSearchName} />
      </label>
    </form>
    <h3>Add new person</h3>
    <form>
      <label>
        Name:
        <input type="text" value={newName} onChange={handleNewName} />
      </label>
      <label>
        Telephone:
        <input type="tel" value={newNumber} onChange={handleNewNumber} />
      </label>
      <div>
        <button type="submit" onClick={addPerson}>add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <ul className='person-list'>
      {
        personsToShow.map(person => <li key={person.id}>{person.name} | {person.number}</li>)
      }
    </ul>
    </div>
  );
}

export default App;
