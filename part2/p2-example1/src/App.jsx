import React from 'react'
import Header from './components/header/header.component'
import Note from './components/note/note.component'


const App = ({ notes, course }) => {
  const rows = () => notes.map(note =>
    <Note
      key={note.id}
      note={note}
    />
  )

  return (
    <div>
      <Header course={course} />
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
    </div>
  )
}

export default App