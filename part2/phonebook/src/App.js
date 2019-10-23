import React, { useState, useEffect } from 'react'
import './App.css'

import contactHandler from './services/contact-handler'

// Components
import Search from './components/search/search.component'
import AddNewPerson from './components/add-new-person/add-new-person.component'
import Numbers from './components/numbers/numbers.component'
import DisplayMessageContainer from './components/display-message-container/display-message-container.component'

function App() {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchName, setSearchName] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ displayMessage, setDisplayMessage ] = useState(null)
  const [ messageStyle, setMessageStyle ] = useState(null)

  // useEffect to run axios and fetch data from db.json (json server at localhost://3001)
  const startPersonList = () => {
    console.log('effect')
    contactHandler
      .getContacts()
      .then(initialPersons => {
        // console.log('promise fulfilled')
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(startPersonList, [])
  // console.log('render', persons.length, 'persons')

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
    // console.log(searchName)
  }

  const resetSearchName = event => {
    event.preventDefault()
    setSearchName('')
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  // Adds a new person and number to the phonebook
  // If there is a person with the same name, it asks the number to be updated
  const addOrUpdate = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.id + 1
    }
    // Check if there is a person with the new name
    const existingPersons = persons.find(person => person.name === newName)
    if (newNumber.length === 0) {
      return alert(`Please, add a phone number!`)
    }
    if (existingPersons) {
      const confirmUpdate = window.confirm(`${existingPersons.name} was already added to the phonebook, replace the old number with the new one ?`)
      if (confirmUpdate) {
        const numberUpdate = { ...existingPersons, number: newNumber }
        contactHandler
          .updateContact(existingPersons.id, numberUpdate)
          .then(changedNumbers => {
            setPersons(persons.map(person => person.id !== existingPersons.id ? person : changedNumbers))
            setNewName('')
            setNewNumber('')
            setSearchName(`${existingPersons.name}`)
            setShowAll(false)
            setDisplayMessage(`${existingPersons.name} number updated.`)
            setMessageStyle('confirmMessage')
            setTimeout(() => {
              setDisplayMessage(null)
              setMessageStyle(null)
          }, 5000);
          })
      }
    } else {
      contactHandler
        .addContact(newPerson)
        .then(newContact => {
          setPersons(persons.concat(newContact))
          setNewName('')
          setNewNumber('')
          setDisplayMessage(`${newPerson.name} added to the phonebook.`)
          setMessageStyle('confirmMessage')
          setTimeout(() => {
            setDisplayMessage(null)
            setMessageStyle(null)
          }, 5000);
        })
    }
  }

  const removePerson = (id) => {
    const person = persons.find(n => n.id === id)
    const confirmRemove = window.confirm(`Delete ${person.name} ?`)
    if (confirmRemove) {
      contactHandler
        .removeContact(person.id)
        .then(() => {
          setPersons(persons.filter(contact => contact.id !== person.id))
          setDisplayMessage(`${person.name} removed from phonebook.`)
          setMessageStyle('errorMessage')
          setTimeout(() => {
            setDisplayMessage(null)
            setMessageStyle(null)
          }, 5000);
        })
        .catch(error => {
          console.log(error)
          setDisplayMessage(`${person.name} has already been removed from the server`)
          setMessageStyle('errorMessage')
          setTimeout(() => {
            setDisplayMessage(null)
            setMessageStyle(null)
          }, 5000);
          setPersons(persons.filter(contact => contact.id !== person.id))
        })
    }
  }

  return (
    <div className="App">
      <h2 className='title'>Phonebook</h2>
      <Search
        searchName={searchName}
        handleSearchName={handleSearchName}
        resetSearchName={resetSearchName}
      />
      <AddNewPerson
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
        addOrUpdate={addOrUpdate}
      />
      {
        displayMessage
        ? <DisplayMessageContainer message={displayMessage} messageStyle={messageStyle}/>
        : null
      }
      {
        persons.length <= 1
        ? <div>The Database is not running. Start it with <code>npm run server</code></div>
        : <Numbers personsToShow={personsToShow} removePerson={removePerson}/>
      }
    </div>
  );
}

export default App;
