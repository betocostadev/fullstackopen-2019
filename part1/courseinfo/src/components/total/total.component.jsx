import React from 'react';
import './total.styles.scss';

const Total = (props) => (
  <p className='total'>
    Number of exercises:
      <span> {props.count[0].exercises + props.count[1].exercises + props.count[2].exercises}</span>
  </p>
)

export default Total;