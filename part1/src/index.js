import React, {useState} from 'react'; // Adding useState for the state hook
import ReactDOM from 'react-dom';
import './index.css';

import Hello from './components/hello.component'

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


const App = (props) => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => {
    setCounter(counter + 1)
  }, 1000);
  console.log('rendering...', counter)
  const name = 'Beto'
  const age = 33
  const courseLink1 = "https://fullstackopen.com/en/part1/introduction_to_react#component"
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={1 + 1} />
      <Hello name={name} age={age} />
      <p>Counter is: {counter}</p>
      <Footer link={courseLink1} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

