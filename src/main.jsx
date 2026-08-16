import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './Context/Auth.jsx'
import Task from './Context/Task.jsx'

createRoot(document.getElementById('root')).render(
  
    <Auth>
        <Task>
            <App />
        </Task>
    </Auth>
  
)
