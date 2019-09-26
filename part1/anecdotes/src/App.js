import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(6).fill(0));
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  console.log(vote);

  const voteCopy = [...vote]
  const addVote = () => {
    console.log(voteCopy);
    voteCopy[selected] += 1
    setVote(voteCopy);
  }

  const random = () => {
    let randomAnecdote = Math.floor(Math.random() * Math.floor(6));
    if (randomAnecdote === selected) {
      randomAnecdote = Math.floor(Math.random() * Math.floor(6));
    }
    console.log(vote[selected])
    return randomAnecdote;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Anecdotes
        </h1>
      </header>
      <div>
        <p>
          {anecdotes[selected]}
        </p>
        <button className='btn-random confirm' onClick={addVote}>vote</button>
        <button className='btn-random default' onClick={() => setSelected(random)}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p></p>
        <p>Has {voteCopy[selected]} votes</p>
      </div>
    </div>
  );
}

export default App;
