import React from 'react'
import './numbers.styles.css'

const Numbers = ({ personsToShow }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul className='person-list'>
        {
          personsToShow.map(person => <li key={person.id}>{person.name} | {person.number}</li>)
        }
      </ul>
    </div>
  )
}

export default Numbers