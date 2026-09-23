import { useContext, createContext, useState } from 'react';

const WordContext = createContext();

function WordProvider({ children }) {
  const [word, setWord] = useState('');

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
}

function useWord() {
  const context = useContext(WordContext);
  if (context === undefined) throw new Error('Word used outside of context');

  return context;
}

export { WordProvider, useWord };
