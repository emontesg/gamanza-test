import React from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function DeathsList() {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h1">
          Deaths
        </Typography>
      </Box>
    </Paper>
  )
}
