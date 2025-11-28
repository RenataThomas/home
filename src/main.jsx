import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Presenca from './pages/Presenca.jsx';
import Presentes from './pages/Presentes.jsx';
import Viagem from './pages/Viagem.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import ObrigadoPage from './pages/ObrigadoPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/rsvp',
        element: <Presenca />,
      },
      {
        path: '/presentes',
        element: <Presentes />,
      },
      {
        path: '/viagem',
        element: <Viagem />,
      },
      {
        path: '/obrigado',
        element: <ObrigadoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
