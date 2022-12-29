import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'


import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import routes from './routes';

let router = createBrowserRouter(routes)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
