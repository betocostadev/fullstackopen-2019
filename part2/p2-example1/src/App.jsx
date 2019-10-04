import React, { useState } from 'react'
import Header from './components/header/header.component'
import Note from './components/note/note.component'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [importantNote, setImportantNote] = useState('checked');
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)
  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
    />
  )

  const addNote = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    //   important: Math.random() > 0.5,
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: importantNote,
      id: notes.length + 1
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    setImportantNote(false)
  }

  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleImportance = (event) => {
    console.log(event.target.checked)
    setImportantNote(event.target.checked)
  }

  return (
    <div>
      <Header course={props.course} />
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}/>
        <button type='submit'>save</button>
        <input type='checkbox' checked={importantNote} onChange={handleImportance} />Important?
      </form>
    </div>
  )
}

export default App