import React from 'react';
import App from './App';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Checkout from './Components/Checkout';
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      }]
  },

]
export default routes;