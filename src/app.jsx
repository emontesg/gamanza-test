import React from 'react'
import { Router } from '@reach/router'

import Box from '@material-ui/core/Box'

import Header from './components/header'
import HomeRoute from './routes/home'
import EpisodesRoute from './routes/episodes'
import NotFoundRoute from './routes/not-found'

export default function App() {
  return (
    <Box>
      <Header />
      <Router>
        <HomeRoute path="/" />
        <EpisodesRoute path="/episodes" />
        <NotFoundRoute default />
      </Router>
    </Box>
  )
}
