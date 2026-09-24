import { useState } from 'react';
import { getRandomWord } from './helpers/funcs';
import { useWord } from './context/WordContext';
import { useWordList } from './context/WordListContext';
import { useDisabled } from './context/DisabledContext';
import './index.css';
import GameOver from './components/GameOver';
import TodaysWord from './components/TodaysWord';
import WordGuess from './components/WordGuess';
import Footer from './components/Footer';

function App() {
  const [secretWord, setSecretWord] = useState(() => getRandomWord());

  const { setWordList } = useWordList();
  const { setWord } = useWord();
  const { setDisabled } = useDisabled();

  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  function reset() {
    setWordList([]);
    setWord('');
    setGameOver(false);
    setWon(false);
    setSecretWord(getRandomWord());
    setDisabled(true);
  }

  return (
    <div className="container">
      <main>
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
      </main>

      <Footer />
    </div>
  );
}

export default App;
