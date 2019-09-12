import React from 'react';
import './content.styles.scss';

const Content = (props) => {
  console.log(props.content)

  return(
    <section className="content">
      <Part name={props.content[0].name} exercises={props.content[0].exercises} />
      <Part name={props.content[1].name} exercises={props.content[1].exercises} />
      <Part name={props.content[2].name} exercises={props.content[2].exercises} />
    </section>
  )
}

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

export default Content;