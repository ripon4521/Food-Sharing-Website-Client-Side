import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthProvider from './Auth/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router}>

 </RouterProvider>
 </AuthProvider>
  </React.StrictMode>,
)
