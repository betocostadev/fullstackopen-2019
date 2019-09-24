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

const History = (props) => {
  console.log('props: ', props);
  if (props.allClicks.length === 0) {
    return (
      <div>The app is used by pressing the buttons</div>
    )
  }

  return (
    <div>Button press history: {props.allClicks.join('-')}</div>
  )
}


const App = (props) => {
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
  // Counter
  const [counter, setCounter] = useState(0);
  const setToValue = (value) => setCounter(value);

  /* // Set clicks
  const [ clicks, setClicks ] = useState({
    left: 0,
    right: 0
  });
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1})
  }
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1})
  } */

  // Set clicks and store all in an array
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  }

  // Event handling
  const [someValue, setSomeValue] = useState(10);
  const handleSomeValue = newValue => () => {
    setSomeValue(newValue);
  }
  const hello = () => {
    const handler = () => console.log('hello world')
    return handler;
  }
  const hello2 = who => {
    return () => console.log('Hello,', who);
  }
  const hello3 = who => () => {
    console.log('hello', who)
  }

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
      <div>
        <div>
          {left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {right}
        </div>
      </div>
      <History allClicks={allClicks}/>
      <p>Revisiting Event Handling</p>
      <div>
        <button onClick={handleSomeValue(100)}>Set to 100</button>
        <button onClick={handleSomeValue(1000)}>Set to 1000</button>
        <button onClick={handleSomeValue(someValue + 1)}>Add 1</button>
        <p>{someValue}</p>
      </div>
      <button onClick={hello()}>Log Hello</button>
      <button onClick={hello2('React')}>Hello, React</button>
      <button onClick={hello2('FS Open')}>Hello, FS Open</button>
      <button onClick={hello3('Course')}>Hello, Course</button>
      <Footer link={courseLink1} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

