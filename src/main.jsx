import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Invoice from './Components/Invoice.jsx';
import ContextAPI from './Components/ContextAPI.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/watches",
    element: <Invoice></Invoice>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextAPI>
      <RouterProvider router={router}>
        <App></App>
      </RouterProvider>
    </ContextAPI>
  </React.StrictMode>,
)
