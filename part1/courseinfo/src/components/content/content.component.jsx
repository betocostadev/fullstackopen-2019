import React from 'react';
import './content.styles.scss';

const Content = () => {
  const parts = [
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
  ];

  console.log(parts[0])
  return(
    <section className="content">
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </section>
  )
}

// const Content = (props) => (
//   <section className="content">
//     <Part part={props.name} exercise={props.exercise} />
//     <Part part={props.name} exercise={props.exercise} />
//     <Part part={props.name} exercise={props.exercise} />
//   </section>
// )

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

export default Content;