import { useState } from 'react';
import { getRandomWord } from './helpers/funcs';
import { useWord } from './context/WordContext';
import { useWordList } from './context/WordListContext';
import './index.css';
import GameOver from './components/GameOver';
import TodaysWord from './components/TodaysWord';
import WordGuess from './components/WordGuess';

function App() {
  const [secretWord, setSecretWord] = useState(() => getRandomWord());

  const { setWordList } = useWordList();
  const { setWord } = useWord();

  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  function reset() {
    setWordList([]);
    setWord('');
    setGameOver(false);
    setWon(false);
    setSecretWord(getRandomWord());
  }

  return (
    <>
      <TodaysWord
        gameOver={gameOver}
        secretWord={secretWord}
      />
      <WordGuess
        gameOver={gameOver}
        secretWord={secretWord}
        setGameOver={setGameOver}
        setWon={setWon}
      />

      {gameOver && (
        <GameOver
          won={won}
          reset={reset}
        />
      )}
    </>
  );
}

export default App;
