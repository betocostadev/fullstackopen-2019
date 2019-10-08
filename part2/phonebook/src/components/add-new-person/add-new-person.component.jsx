import React from 'react'

const AddNewPerson = ({ newName, handleNewName, newNumber, handleNewNumber, addPerson }) => {
  return (
    <div>
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
    </div>
  )
}

export default AddNewPerson