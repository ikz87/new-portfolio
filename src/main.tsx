import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import './fonts.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Dotfiles from './pages/Dotfiles';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/dotfiles",
        element: <Dotfiles />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
