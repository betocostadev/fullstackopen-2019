import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

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
          <CustomButton type="submit" onClick={addPerson} isAdd>add</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default AddNewPerson