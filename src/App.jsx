import React from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { AppRoute } from './consts'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.PROJECTS} render={() => <ProjectPage />} />
        <Route exact path={AppRoute.CONTACT} render={() => <ContactPage />} />
        <Route exact path={AppRoute.ABOUT} render={() => <AboutPage />} />
        <Route exact path={AppRoute.MAIN} render={() => <MainPage />} />
      </Switch>
    </Router>
  )
}

export default App
