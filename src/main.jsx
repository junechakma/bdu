import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollToTop>
    <RouterProvider router={router} />
    </ScrollToTop>
  </React.StrictMode>
)
