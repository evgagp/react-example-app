
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/app';
import '@/app/scss/app.scss';

const rootHTML = createRoot(document.getElementById('root')!);
rootHTML.render(
  <StrictMode>
    <App />
  </StrictMode>
);
