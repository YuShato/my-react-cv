import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './context'



window.addEventListener('scroll', () => {
  const navElement = document.querySelector('.nav');
  if (window.scrollY > 80) {
    navElement.classList.add('navbar-fixed')
  } else {
    if (navElement.classList.contains('navbar-fixed')) {
      navElement.classList.remove('navbar-fixed')
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
