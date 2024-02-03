import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import RootLayout from './Layout.jsx';
import '../i18n/i18n.js'

const router = createBrowserRouter([
  {path:'',element: <RootLayout />,children:[
    {index:true, element: <App />}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
