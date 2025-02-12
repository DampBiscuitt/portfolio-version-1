import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import "@fontsource/roboto"
import "@fontsource/outfit"; // Default weight 400
import "@fontsource/outfit/100.css"; // Weight 700 (bold)
import "@fontsource/outfit/900.css"; // Weight 900 (extra-bold)

import "@fontsource/lora"; // Default weight 400
import "@fontsource/lora/400.css"; // Weight 700 (bold)
import "@fontsource/lora/700.css"; // Weight 900 (extra-bold)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
