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
import Watch from './Components/Watch.jsx';

const router = createBrowserRouter ([
    {
      path: "/",
      element: <App></App>
    },
    {
      path : "/watches",
      element: <Watch></Watch>
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App></App>
    </RouterProvider>
  </React.StrictMode>,
)
