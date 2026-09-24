import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { WordListProvider } from './context/WordListContext.jsx';
import { WordProvider } from './context/WordContext.jsx';
import { DisabledProvider } from './context/DisabledContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WordProvider>
      <WordListProvider>
        <DisabledProvider>
          <App />
        </DisabledProvider>
      </WordListProvider>
    </WordProvider>
  </StrictMode>,
);
