import React from 'react';
import './content.styles.scss';

const Content = ({...props}) => (
  <section className="content">
    <Part part={props.part1} exercise={props.exercises1}/>
    <Part part={props.part2} exercise={props.exercises2}/>
    <Part part={props.part3} exercise={props.exercises3}/>
  </section>
)

const Part = ({part, exercise}) => (
  <p>{part} {exercise}</p>
)

export default Content;