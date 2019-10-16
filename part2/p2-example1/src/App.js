import React, { useState, useEffect } from 'react'

// import axios from 'axios'

import noteService from './services/notes'

// Components
import Header from './components/header/header.component'
import Note from './components/note/note.component'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [importantNote, setImportantNote] = useState(false);
  const [showAll, setShowAll] = useState(true)

  const course = {
    name: 'Full Stack Open', year: 2019
  }

  // useEffect to get data from the json server
  // Default way to write useEffect
  /* useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes') */

  // Another way to write useEffect, as a separate hook:
  const hook = () => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        console.log('Promise fulfilled, got notes')
        setNotes(initialNotes)
      })
  }
  useEffect(hook, [])

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)
  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
      toggleImportance={() => toggleImportanceOf(note.id)}
    />
  )

  const addNote = (event) => {
    event.preventDefault()
    // console.log('button clicked', event.target)
    //   important: Math.random() > 0.5,
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: importantNote,
    }

    noteService
      .create(noteObject)
      .then(newNotes => {
        setNotes(notes.concat(newNotes))
        setNewNote('')
        setImportantNote(false)
      })
  }

  const toggleImportanceOf = id => {
    // const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(changedNotes => {
        setNotes(notes.map(note => note.id !== id ? note : changedNotes))
        console.log(`importance of note: ${id}, changed`)
      })
  }

  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleImportance = (event) => {
    setImportantNote(event.target.checked)
  }



  return (
    <div>
      <Header course={course} />
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
          onChange={handleNoteChange}
          placeholder='Add note...' />
        <button type='submit'>save</button>
        <label>
          Important?
          <input type='checkbox' checked={importantNote} onChange={handleImportance} />
        </label>
      </form>
    </div>
  )
}

export default App