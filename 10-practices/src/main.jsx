import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { App } from './App'
import Practice from './Practice'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Practice/>
  </StrictMode>,
)
