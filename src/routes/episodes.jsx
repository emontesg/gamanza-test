import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import EpisodesList from '../components/episodes-list'

export default function EpisodesRoute() {
  return (
    <Box m={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EpisodesList />
        </Grid>
      </Grid>
    </Box>
  )
}
