import WordGrid from './WordGrid';
import { useWordList } from '../context/WordListContext';

function WordList({ secretWord }) {
  const { wordList } = useWordList();
  if (!wordList) return null;

  return (
    <div>
      {wordList.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h3>Your Word List</h3>
        </div>
      )}

      {wordList.map((word) => (
        <WordGrid
          userWord={word}
          secretWord={secretWord}
          key={word}
          displayWord={word}
        />
      ))}
    </div>
  );
}

export default WordList;
