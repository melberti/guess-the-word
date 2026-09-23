import { useRef, useEffect } from 'react';
import { useWordList } from '../context/WordListContext';
import { useWord } from '../context/WordContext';
import WordList from './WordList';

function WordGuess({ secretWord, gameOver, setGameOver, setWon }) {
  const ref = useRef();
  const { wordList, setWordList } = useWordList();
  const { word, setWord } = useWord();

  useEffect(
    function () {
      ref.current?.focus();
    },
    [wordList],
  );

  function handleChange(val) {
    if (wordList?.includes(val)) {
      return;
    }
    setWord(val);
  }

  function handleClick(e) {
    e.preventDefault();
    if (word.length < 5) return;

    //if we already have 4, adding another will end game
    if (wordList?.length === 4) setGameOver(true);

    setWordList([...wordList, word]);

    if (word === secretWord) {
      setWon(true);
    }

    setWord('');
  }

  return (
    <>
      {!gameOver && (
        <>
          <form onSubmit={(e) => handleClick(e)}>
            <input
              type="text"
              maxLength={5}
              value={word}
              onChange={(e) => handleChange(e.target.value?.toUpperCase())}
              placeholder="Guess a word"
              ref={ref}
            />{' '}
            <button
              type="button"
              onClick={handleClick}
            >
              Submit Guess
            </button>
          </form>
        </>
      )}
      <WordList secretWord={secretWord} />
    </>
  );
}

export default WordGuess;
