import React, { useState, useEffect } from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import * as api from '../services/bb-api'
import DeathItem from './death-item'

export default function DeathsList() {
  const { loading, data } = useDeathsList()

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h1">
          Deaths
        </Typography>

        <Box mt={2}>
          {loading && <div>Loading...</div>}
          {data.length > 0 && (
            <Typography variant="subtitle2" color="secondary">
              Total deaths: {data.length}
            </Typography>
          )}
        </Box>
      </Box>

      {data.slice(0, 5).map((death) => (
        <DeathItem key={death.death_id} {...death} />
      ))}
    </Paper>
  )
}
function useDeathsList() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    api.getDeaths().then((characters) => {
      setData(characters)
      setLoading(false)
    })
  }, [])

  return {
    loading,
    data,
  }
}
