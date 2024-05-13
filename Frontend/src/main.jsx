import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Add from './components/Add.jsx';
import { Edit } from './components/Edit.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/update',
    element: 'updated page rendered',
  },
  {
    path: '/add',
    element: <Add />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
