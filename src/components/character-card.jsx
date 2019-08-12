import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import StatusIcon from '@material-ui/icons/Favorite'
import BirthdayIcon from '@material-ui/icons/CalendarToday'
import OccupationIcon from '@material-ui/icons/Work'

export default function CharacterCard({
  name,
  img,
  portrayed,
  status,
  birthday,
  occupation,
  ...props
}) {
  return (
    <Card component={Box} p={2} display="flex" {...props}>
      <Box>
        <Avatar alt={name} src={img} style={{ width: 60, height: 60 }} />
      </Box>
      <Box ml={2}>
        <Typography variant="subtitle1">{name}</Typography>
        <Typography variant="caption" color="textSecondary">
          Portrayed by {portrayed}
        </Typography>

        <Box my={2}>
          <Divider />
        </Box>

        <CharacterInfoLine icon={<StatusIcon />}>{status}</CharacterInfoLine>
        <CharacterInfoLine icon={<BirthdayIcon />}>
          {birthday}
        </CharacterInfoLine>
        <CharacterInfoLine icon={<OccupationIcon />}>
          {occupation.join(', ')}
        </CharacterInfoLine>
      </Box>
    </Card>
  )
}

function CharacterInfoLine({ icon, children }) {
  return (
    <Box display="flex" alignItems="center" mt={1}>
      <Box display="flex" alignItems="center" mr={1}>
        {icon}
      </Box>
      <Typography variant="caption">{children}</Typography>
    </Box>
  )
}
