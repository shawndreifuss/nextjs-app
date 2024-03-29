import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"  
import { GoogleOAuthProvider } from '@react-oauth/google';
import "@fortawesome/fontawesome-free/css/all.min.css";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <GoogleOAuthProvider clientId="831822384607-r2hu6lg3gppj5anub7khm9aqb2pvrb6q.apps.googleusercontent.com">
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
   
  </React.StrictMode>,
)
