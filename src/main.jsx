import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-5ctxqzni8es3mqo6.us.auth0.com"
    clientId="taxX2Eg6t7MakuZ5BKxy3JjzKJRdZFGM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <App />
  {/*<React.StrictMode>
    <App />
  </React.StrictMode>,*/}
  </Auth0Provider>,
)
