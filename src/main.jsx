import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Store } from "./app/Store"
import { Provider } from "react-redux";
import { fetchUsers } from './app/features/users/userSlice'

Store.dispatch(fetchUsers());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
)
