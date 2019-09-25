import React, { useState } from 'react';
// import Ratings from './components/ratings/ratings.component';
import './App.css';

const Button = ({action, text, style }) => (
  <button className={style} onClick={action}>{text}</button>
)

const Statistic = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const confirm = 'confirm';
  const def = 'default';
  const danger = 'danger'

  const average = () => {
    let total = 0;
      total = (good * 1 + neutral * 0 + bad * (-1)) / (good + neutral + bad);
      return total.toFixed(3);
  }

  const positive = () => (good / (good + neutral + bad) * 100).toFixed(2);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Unicafe</h1>
      </header>
      <div className='buttons'>
        <Button style={`btn-default ${confirm}`} action={() => setGood(good + 1)} text='Good' />
        <Button style={`btn-default ${def}`} action={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button style={`btn-default ${danger}`} action={() => setBad(bad + 1)} text='Bad' />
      </div>
      <div className='table'>
      {
        good === 0 && neutral === 0 && bad === 0 ?
        <div>
          <p>Statistics</p>
          <p>No feedback given</p>
        </div>
        :
        <table>
          <thead>
            <tr>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <Statistic text='Good' value={good} />
            <Statistic text='Neutral' value={neutral} />
            <Statistic text='Bad' value={bad} />
            <Statistic text='All' value={good + neutral + bad} />
            <Statistic text='Average' value={average()} />
            <Statistic text='Positive' value={`${positive()}%`} />
          </tbody>
        </table>
      }
      </div>
    </div>
  );
}

export default App;
