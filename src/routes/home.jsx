import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import CharactersList from '../components/characters-list'
import DeathsList from '../components/deaths-list'

export default function HomeRoute() {
  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <CharactersList />
        </Grid>

        <Grid item xs={5}>
          <DeathsList />
        </Grid>
      </Grid>
    </Box>
  )
}
