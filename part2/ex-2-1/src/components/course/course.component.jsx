import React from 'react'

import Header from '../header/header.component'
import Content from '../content/content.component'

const Course = ({ course }) => {
  const {name, parts} = course;
  return (
    <div>
      <Header title={name} />
      <Content parts={parts} />
    </div>
  )
}

export default Course