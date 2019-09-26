import React, { useState } from 'react';
import './App.css';

const App = () => {
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

  const voteCopy = [...vote]

  const addVote = () => {
    voteCopy[selected] += 1
    setVote(voteCopy);
  }

  // const showMostVoted = () => {
  //   console.log(Math.max(...voteCopy));
  //   console.log('index of max is: ', voteCopy.indexOf(Math.max(...voteCopy)));
  //   console.log(anecdotes[voteCopy.indexOf(Math.max(...voteCopy))]);
  // }

  const random = () => {
    let randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    if (randomAnecdote === selected) {
      randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    }
    // console.log(vote[selected])
    return randomAnecdote;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Anecdotes
        </h1>
      </header>
      <div className='anecdotes__container'>
        <h2>Anecdote of the day</h2>
        <p className='anecdote'>
          {anecdotes[selected]}
        </p>
        <p>Has {voteCopy[selected]} votes</p>
        <button className='btn-random confirm' onClick={addVote}>vote</button>
        <button className='btn-random default' onClick={() => setSelected(random)}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {
          Math.max(...voteCopy) === 0
          ?
          <div>
            <p>No Votes yet.</p>
          </div>
          :
          <div>
            <p>{(anecdotes[voteCopy.indexOf(Math.max(...voteCopy))])}</p>
            <p>Has {Math.max(...voteCopy)} votes</p>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
