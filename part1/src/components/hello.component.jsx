import React from 'react';

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age;
  return (
    <div>
      <p>Hello component says: Hello {name}, your age is {age}</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


export default Hello;