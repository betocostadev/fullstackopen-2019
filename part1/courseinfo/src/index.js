import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header/header.component';
import Content from './components/content/content.component';
import Total from './components/total/total.component';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content />
      <Total ex1={course.parts[0].exercises}
      ex2={course.parts[1].exercises}
      ex3={course.parts[2].exercises}
      />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


