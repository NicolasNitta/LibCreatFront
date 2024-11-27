import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Theme } from '@radix-ui/themes';
import { BrowserRouter } from "react-router-dom";
import {Toaster} from 'sonner'

createRoot(document.getElementById('root')!).render(
  
  <>

    <StrictMode>
      <BrowserRouter>
        <Theme>
          <App/>
          <Toaster richColors></Toaster>
        </Theme>
      </BrowserRouter>
    </StrictMode>
    
  </>
)
