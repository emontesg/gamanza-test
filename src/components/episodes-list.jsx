import React, { useState, useEffect } from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'

import * as api from '../services/bb-api'
import EpisodeItem from './episode-item'

export default function EpisodesList() {
  const { loading, data } = useEpisodesList()

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" component="h1">
          Episodes
        </Typography>

        <Box mt={2}>
          {loading && <div>Loading...</div>}
          {data.length > 0 && (
            <List>
              {data.map((episode) => (
                <EpisodeItem key={episode.episode_id} {...episode} />
              ))}
            </List>
          )}
        </Box>
      </Box>
    </Paper>
  )
}

function useEpisodesList() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    api.getEpisodes().then((episodes) => {
      setData(episodes)
      setLoading(false)
    })
  }, [])

  return {
    loading,
    data,
  }
}
