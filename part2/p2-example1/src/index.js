import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const course = {
  name: 'Full Stack Open', year: 2019
}

/*
  // ANTI-PATTERN: This way works, it uses the index of the array elements as keys, but
  // this is not recommended. It can cause undesired problems.
  const rows = () => notes.map((note, i) =>
    <li key={i}>
      {note.content}
    </li>
  ) */

  // const result = notes.filter(note => note.id > 1).map(note => note.id)
  // const result = notes.map(note => note.content )
  // console.log(result)

ReactDOM.render(
  <App notes={notes} course={course}/>,
  document.getElementById('root')
);
