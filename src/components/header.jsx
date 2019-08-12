import React from 'react'
import { Link as RouterLink } from '@reach/router'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flex={1}>
          <Typography variant="h6" component="h1">
            Gamanza Test
          </Typography>
        </Box>

        <Box display="flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/episodes">Episodes</NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

function NavLink(props) {
  return (
    <Box px={2}>
      <Link
        component={RouterLink}
        variant="button"
        color="inherit"
        {...props}
      />
    </Box>
  )
}
