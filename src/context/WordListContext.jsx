import { useContext, createContext, useState } from 'react';

const WordListContext = createContext();

function WordListProvider({ children }) {
  const [wordList, setWordList] = useState([]);

  return (
    <WordListContext.Provider value={{ wordList, setWordList }}>
      {children}
    </WordListContext.Provider>
  );
}

function useWordList() {
  const context = useContext(WordListContext);
  if (context === undefined)
    throw new Error('Using WordList outside of context');

  return context;
}

export { WordListProvider, useWordList };
