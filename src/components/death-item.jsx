import React from 'react'

import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function DeathItem({
  death,
  cause,
  responsible,
  last_words: lastWords,
}) {
  return (
    <List
      dense
      subheader={
        <ListSubheader disableSticky color="primary">
          {death}
        </ListSubheader>
      }
    >
      <DeathItemLine title="Cause">{cause}</DeathItemLine>
      <DeathItemLine title="Responsible">{responsible}</DeathItemLine>
      <DeathItemLine title="Last words">{lastWords}</DeathItemLine>
    </List>
  )
}

function DeathItemLine({ title, children }) {
  return (
    <ListItem>
      <ListItemText
        primary={title}
        secondary={
          <Typography variant="caption" component="div" color="textSecondary">
            {children}
          </Typography>
        }
      />
    </ListItem>
  )
}
