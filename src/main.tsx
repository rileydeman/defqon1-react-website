import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./assets/css/fonts.css";
import "./assets/css/style.css";
import "./assets/css/header.css";
import "./assets/css/cover.css";
import "./assets/css/editions.css";
import "./assets/css/stages.css";
import "./assets/css/anthems.css";
import "./assets/css/information.css";
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
