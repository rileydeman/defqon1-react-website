import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/css/fonts.css";
import "./assets/css/style.css";
import "./assets/css/header.css";
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
