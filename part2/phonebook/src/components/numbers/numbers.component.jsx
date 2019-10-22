import React from 'react'
import './numbers.styles.css'
import CustomButton from '../custom-button/custom-button.component'

const Numbers = ({ personsToShow, removePerson }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul className='person-list'>
        { personsToShow.map(person =>
          <li key={person.id}>{person.name} {person.number}
          <CustomButton isRemove onClick={() => removePerson(person.id)}>delete</CustomButton></li>)
        }
      </ul>
    </div>
  )
}

export default Numbers