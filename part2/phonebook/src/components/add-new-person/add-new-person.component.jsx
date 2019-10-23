import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

const AddNewPerson = ({ newName, handleNewName, newNumber, handleNewNumber, addOrUpdate }) => {
  return (
    <div>
      <h3>Add new person</h3>
      <form>
        <label>
          Name:
          <input type="text" value={newName} onChange={handleNewName} />
        </label>
        <label>
          Number:
          <input type="tel" value={newNumber} onChange={handleNewNumber} />
        </label>
        <div>
          <CustomButton type="submit" onClick={addOrUpdate} isAdd>add</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default AddNewPerson