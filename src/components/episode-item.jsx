import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function EpisodeItem({
  title,
  season,
  episode,
  air_date: airDate,
}) {
  return (
    <ListItem>
      <ListItemText
        primary={`${title} (S${season}E${episode})`}
        secondary={`Air date: ${airDate}`}
      />
    </ListItem>
  )
}
