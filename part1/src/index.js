import React, {useState} from 'react'; // Adding useState for the state hook
import ReactDOM from 'react-dom';
import './index.css';

import Hello from './components/hello.component';

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

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)


const App = (props) => {
  const [counter, setCounter] = useState(0);

  // setTimeout(() => {
  //   setCounter(counter + 1)
  // }, 1000);
  // console.log('rendering...', counter)

  // Using a function that will call another function.
  // This will avoid the button call to break the app, as it will not be called on load forever
  // const setToValue = (value) => {
  //   return () => {
  //     setCounter(value);
  //   }
  // }
  // Same thing, but now, using double arrow functions:
  // const setToValue = (value) => () => setCounter(value);
  const setToValue = (value) => setCounter(value);

  const name = 'Beto'
  const age = 33
  const courseLink1 = "https://fullstackopen.com/en/part1/introduction_to_react#component"
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={1 + 1} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button onClick={() => setToValue(counter + 1)} text='plus' />
      <Button onClick={() => setToValue(counter - 1)} text='minus' />
      <Button onClick={() => setToValue(0)} text='zero' />
      <Footer link={courseLink1} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

