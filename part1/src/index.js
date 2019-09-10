import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20

//   return (
//     <div>
//       <p>Hello World, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// Hello component
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

// Footer component test
const Footer = (props) => {
  return (
    <footer>
      <p>
      First React Page based on the contents of the Full Stack Open <a href={props.link} target="_blank"  rel="noopener noreferrer">Part 1 page</a>.
      </p>
    </footer>
  )
}

const App = () => {
  const name = 'Beto'
  const age = 33
  const courseLink1 = "https://fullstackopen.com/en/part1/introduction_to_react#component"
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={1 + 1} />
      <Hello name={name} age={age} />
      <Footer link={courseLink1} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

