import React from 'react'

const Content = ({parts}) => {
  const content = parts
  return (
    <section>
      {
        content.map(content => <p key={content.id}>{content.name} <span>{content.exercises}</span></p>)
      }
      <p>Total of {content.reduce((acc, cur) => acc + cur.exercises, 0)} exercises</p>
    </section>
  )
}

export default Content